import { useEffect, useState } from 'react';
import { usePostAward } from '../hooks/usePostAwards';

import { useModal } from '../../../hooks';
import information from '/assets/logos/information.svg';
import gift from '/assets/logos/gift.svg'
import './AwardsUpdate.css';
import { useGetAwards, usePutAwards } from '../hooks/usePutAwards';

export const AwardsUpdate = ({awardId}) => {

    const [isOpenModal, openModal, closeModal] = useModal(false);
    
    //FORMULARIO
    const [name, setName] = useState('');
    const [points, setPoints] = useState('');
    const [image, setImage] = useState('');
    const [imageChange, setImageChange] = useState(false)
    
    const [postImage, setPostImage] = useState('');

    const handleFileUpload = (foto) => {
        const reader = new FileReader()
        reader.readAsDataURL(foto);
        reader.onload = function () {
            const base64 = reader.result
            setPostImage(base64);
            setImage(base64);
            setImageChange(true);
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        const awarData = {
            name_award: name,
            number_award: points,
            photo_award: image,
            image_change: imageChange,
        }
        console.log(awarData);
        const resp = await usePutAwards(JSON.stringify(awarData));
    }

    useEffect(() => {
        async function fetchData() {
            const respAwards = await useGetAwards(awardId);

            setName(respAwards.name_award);
            setPoints(respAwards.number_award);
            setImage(respAwards.photo_award);
            setImageChange(respAwards.image_change);
        }
        fetchData();
    }, [awardId])





    return (
        <form className='Awards-Update' onSubmit={handleSubmit}>

            <div className='Awards-Update-Container'>
                <label htmlFor="" className='Awards-Update-label'>Nombre:</label>
                <input type="text"
                       className='Awards-Update-inputs' 
                       name='name'
                       required={true}
                       value={name}
                       onChange={(event) => setName(event.target.value)}
                       />

                <label htmlFor="" className='Awards-Update-label' >Puntos:</label>
                <input type="number"
                       className='Awards-Update-inputs'
                       name='points'
                       required={true}
                       value={points}
                       onChange={(event) => setPoints(event.target.value)}
                       />

                <label htmlFor="" className='Awards-Update-label'>Foto:</label>
                <input
                        className='Employe-Update-UploadPhoto-button'
                        type='file'
                        name='fotoUpload'
                        accept="image/png, .jpeg, .jpg, image/gif"
                        onChange={(e) => handleFileUpload(e.target.files[0])}
                    />
            </div>

            <div className='Awards-Update-Container'>
                <div className='Awards-Update-Sent'>
                    <img src={information} alt="AwardsUpdate" />
                    <h1> PUNTO DE INFORMACIÓN</h1>
                    <span>Al crear un nuevo premio, los usuarios lo podrán
                        visualizar en el rango de tiempo que esta especificado,
                        dentro de la aplicación oficial, para reclamar su premio
                        mostraran su código QR que debes escanear en el
                        modulo de "canjear creditos" y podrás debitar sus
                        puntos obtenidos.</span>
                </div>
            </div>


            <div className='Awards-Update-Container'>
                <div className='Awards-Update-Sent'>
                    <img src={gift} alt="AwardsUpdate" />
                    <h1> Registrar premio</h1>
                    <span>Ya estas a un paso de registrar la recompesa para tus clientes</span>
                    <button type='submit' className='Awards-Update-UploadPhoto-button button-sent'>Crear premio</button>
                </div>

            </div>
        </form>

    )
}
