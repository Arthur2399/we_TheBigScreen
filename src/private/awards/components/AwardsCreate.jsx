import { useState } from 'react';
import { usePostAward } from '../hooks/usePostAwards';
import information from '/assets/logos/information.svg';
import gift from '/assets/logos/gift.svg'
import './AwardsCreate.css';

export const AwardsCreate = () => {


    const [postImage, setPostImage] = useState('');


    const handleFileUpload = (foto) => {
        const reader = new FileReader()
        reader.readAsDataURL(foto);
        reader.onload = function () {
            const base64 = reader.result
            setPostImage(base64);
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        const awarData = {
            name_award: event.target.elements.name.value,
            number_award: parseInt(event.target.elements.points.value),
            photo_award: postImage,
        }
        const resp = await usePostAward(JSON.stringify(awarData));
    }


    return (
        <form className='Awards-Create' onSubmit={handleSubmit}>

            <div className='Awards-Create-Container'>
                <label htmlFor="" className='Awards-Create-label'>Nombre:</label>
                <input type="text"
                       className='Awards-Create-inputs' 
                       name='name'
                       required={true}
                       />

                <label htmlFor="" className='Awards-Create-label' >Puntos:</label>
                <input type="number"
                       className='Awards-Create-inputs'
                       name='points'
                       required={true}
                       />

                <label htmlFor="" className='Awards-Create-label'>Foto:</label>
                <input
                        className='Employe-Create-UploadPhoto-button'
                        type='file'
                        name='fotoUpload'
                        required={true}
                        accept="image/png, .jpeg, .jpg, image/gif"
                        onChange={(e) => handleFileUpload(e.target.files[0])}
                    />
            </div>

            <div className='Awards-Create-Container'>
                <div className='Awards-Create-Sent'>
                    <img src={information} alt="AwardsCreate" />
                    <h1> PUNTO DE INFORMACIÓN</h1>
                    <span>Al crear un nuevo premio, los usuarios lo podrán
                        visualizar en el rango de tiempo que esta especificado,
                        dentro de la aplicación oficial, para reclamar su premio
                        mostraran su código QR que debes escanear en el
                        modulo de "canjear creditos" y podrás debitar sus
                        puntos obtenidos.</span>
                </div>
            </div>


            <div className='Awards-Create-Container'>
                <div className='Awards-Create-Sent'>
                    <img src={gift} alt="AwardsCreate" />
                    <h1> Registrar premio</h1>
                    <span>Ya estas a un paso de registrar la recompesa para tus clientes</span>
                    <button type='submit' className='Awards-Create-UploadPhoto-button button-sent'>Crear premio</button>
                </div>

            </div>
        </form>

    )
}
