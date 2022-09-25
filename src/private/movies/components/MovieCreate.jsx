import { useEffect, useState } from 'react';
import { Modal } from '../../../components';
import { useModal } from '../../../hooks';
import { ActorCreate } from './ActorCreate';
import { useGetActors, useGetCategories, usePostMovie } from '../hooks';
import movieTag from '/assets/logos/Movie-tag.svg';
import link from '/assets/icons/link.png';
import './MovieCreate.css';

export const MovieCreate = () => {

    const [actors, setActors] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isOpenModal, openModal, closeModal] = useModal(false);
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

        var selectObjectC = document.getElementById("movie-select-category");
        const categorySelect = [];
        let c = 0;
        for (var i = 0; i < selectObjectC.options.length; i++) {
            if (selectObjectC.options[i].selected == true) {
                categorySelect[c] = parseInt(selectObjectC.options[i].value);
                c++
            }
        }

        var selectObjectA = document.getElementById("movie-select-actor");
        const actorSelect = [];
        let a = 0;
        for (var i = 0; i < selectObjectA.options.length; i++) {
            if (selectObjectA.options[i].selected == true) {
                actorSelect[a] = parseInt(selectObjectA.options[i].value);
                a++
            }
        }

        const movieData = {
            name_movie: event.target.elements.movieName.value,
            description_movie: event.target.elements.sipnopsis.value,
            duration_movie: event.target.elements.duration.value,
            premiere_date_movie: event.target.elements.datePremiere.value,
            departure_date_movie: event.target.elements.dateExit.value,
            photo_movie: postImage,
            category_movie_id: categorySelect,
            actor_movie_id: actorSelect,
        }
        console.log(movieData)
        const resp = await usePostMovie(JSON.stringify(movieData));
    }

    useEffect(() => {
        async function fetchData() {
            const respC = await useGetCategories();
            const respA = await useGetActors();
            setCategories(respC);
            setActors(respA);
        }
        fetchData();
    }, [])


    return (
        <form onSubmit={handleSubmit} className='Movies-Create'>

            <div className='Movies-Create-Container'>
                <label htmlFor="movieName" className='Movies-Create-label'>Nombre:</label>
                <input type="text"
                    className='Movies-Create-inputs'
                    name='movieName'
                    required={true}
                />

                <label htmlFor="sipnopsis" className='Movies-Create-label'>Sipnosis:</label>
                <textarea className='Movies-Create-inputs-TextArea'
                    name="sipnopsis"
                    cols="30"
                    rows="10"
                    required={true}
                />

                <label htmlFor="duration" className='Movies-Create-label' >Duración:</label>
                <input type="time"
                    className='Movies-Create-inputs'
                    name='duration'
                    required={true}
                />

                <label htmlFor="fotoUpload" className='Movies-Create-label'>Portada:</label>
                <input className='Movie-button-portada'
                    type='file'
                    name='fotoUpload'
                    accept="image/png, .jpeg, .jpg, image/gif"
                    required={true}
                    onChange={(e) => handleFileUpload(e.target.files[0])}
                />
            </div>

            <div className='Movies-Create-Container'>
                <label htmlFor="datePremiere" className='Movies-Create-label'>Fecha de estreno:</label>
                <input type="date"
                    className='Movies-Create-inputs'
                    name='datePremiere'
                    required={true}

                />

                <label htmlFor="dateExit" className='Movies-Create-label'>Fecha de salida:</label>
                <input type="date"
                    className='Movies-Create-inputs'
                    name='dateExit'
                    required={true}
                />

                <label htmlFor="selectCategory" className='Movies-Create-label'>Categorias:</label>
                <select name="selectCategory" id="movie-select-category" className="Movies-Create-comboBox" required={true} multiple>
                    {
                        categories.map((cat, i) => (
                            <option value={cat.id} key={i}>{cat.category_name}</option>
                        ))
                    }
                </select>

            </div>

            <div className='Movies-Create-Container'>
                <label htmlFor="" className='Movies-Create-label'>Actores:</label>
                <div className='Movies-Create-combo-link'>
                <select name="selectCategory" id="movie-select-actor" className="Movies-Create-comboBox" required={true} multiple>
                    {
                        actors.map((act, i) => (
                            <option value={act.id} key={i}>{act.name_actor}</option>
                        ))
                    }
                </select>
                    <button onClick={openModal}><img src={link} alt="link" className='actor-link' /></button>
                    <Modal isOpen={isOpenModal} closeModal={closeModal} title="Crear nuevo actor" x={"19%"} y={"310px"}>
                        <ActorCreate />
                    </Modal>
                </div>

                <div className='Movies-Create-Sent'>
                    <img src={movieTag} alt="employeCreate" />
                    <h1> Publicar estreno</h1>
                    <span>Al publicar podrás ver los
                        cambios en tu app</span>
                    <button className='Movies-button-sent' type='submit'>Publicar</button>
                </div>

            </div>
        </form>
    )
}
