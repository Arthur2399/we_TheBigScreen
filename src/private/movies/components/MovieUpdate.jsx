import { useEffect, useState } from 'react';
import { Modal } from '../../../components';
import { useModal } from '../../../hooks';
import { useGetActors, useGetCategories, usePostMovie } from '../hooks';
import { ActorCreate } from './ActorCreate';
import movieTag from '/assets/logos/Movie-tag.svg';
import link from '/assets/icons/link.png';
import './MovieUpdate.css';
import { useGetMovie, usePutMovie } from '../hooks/usePutMovie';

export const MovieUpdate = ({movieId}) => {

    const [isOpenModal, openModal, closeModal] = useModal(false);
    
    const [actor, setActor] = useState([]);
    const [actors, setActors] = useState([]);
    const [category, setCategory] = useState([]);
    const [categorie, setCategories] = useState([]);
    
    //FORMULARIO
    const [name, setName] = useState('')
    const [sipnopsis, setSipnopsis] = useState('')
    const [duration, setDuration] = useState('')
    const [photo, setPhoto] = useState('')    
    const [premiereDate, setPremiereDate] = useState('')
    const [exitDate, setExitDate] = useState('')
    const [categoryID, setCategoryID] = useState([])
    const [actorID, setActorID] = useState([])
    const [photoChange, setPhotoChange] = useState(false)
    
    
    const [postImage, setPostImage] = useState('');
    
    const handleFileUpload = (foto) => {
        const reader = new FileReader()
        reader.readAsDataURL(foto);
        reader.onload = function () {
            const base64 = reader.result
            setPostImage(base64);
            setPhoto(base64);
            setPhotoChange(true)
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
            name_movie: name,
            description_movie: sipnopsis,
            duration_movie: duration,
            premiere_date_movie: premiereDate,
            departure_date_movie: exitDate,
            photo_movie: photo,
            category_movie_id: categoryID,
            actor_movie_id: actorID,
            photo_change: photoChange,
        }
       const resp = await usePutMovie(JSON.stringify(movieData), movieId);
       console.log(movieData)
    }

    useEffect(() => {
        async function fetchData() {
            const respC = await useGetCategories();
            const respA = await useGetActors();
            const respMovie = await  useGetMovie(movieId)

            setCategory(respC);
            setActor(respA);

            setName(respMovie.name_movie)
            setSipnopsis(respMovie.description_movie)
            setDuration(respMovie.duration_movie)
            setPhoto(respMovie.photo_movie)
            setPremiereDate(respMovie.premiere_date_movie)
            setExitDate(respMovie.departure_date_movie)
            
            setCategoryID(respMovie.category_movie)
            setActorID(respMovie.actor_movie)

            respC.forEach(c => {
                if (c.id == respMovie.category_movie) {
                    setCategories(c.category_name);
                }});

            respA.forEach(a => {
                if (a.id == respMovie.actor_movie) {
                    setActors(a.name_actor);
                }});

        }
        fetchData();
    }, [movieId])


    return (
        <form onSubmit={handleSubmit} className='Movies-Update'>

            <div className='Movies-Update-Container'>
                <label htmlFor="movieName" className='Movies-Update-label'>Nombre:</label>
                <input type="text"
                    className='Movies-Update-inputs'
                    name='movieName'
                    required={true}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <label htmlFor="sipnopsis" className='Movies-Update-label'>Sipnosis:</label>
                <textarea className='Movies-Update-inputs-TextArea'
                    name="sipnopsis"
                    cols="30"
                    rows="10"
                    required={true}
                    value={sipnopsis}
                    onChange={(event) => setSipnopsis(event.target.value)}
                />

                <label htmlFor="duration" className='Movies-Update-label' >Duración:</label>
                <input type="time"
                    className='Movies-Update-inputs'
                    name='duration'
                    required={true}
                    value={duration}
                    onChange={(event) => setDuration(event.target.value)}
                />

                <label htmlFor="fotoUpload" className='Movies-Update-label'>Portada:</label>
                <input className='Movie-button-portada'
                    type='file'
                    name='fotoUpload'
                    accept="image/png, .jpeg, .jpg, image/gif"
                    onChange={(e) => handleFileUpload(e.target.files[0])}
                />
            </div>

            <div className='Movies-Update-Container'>
                <label htmlFor="datePremiere" className='Movies-Update-label'>Fecha de estreno:</label>
                <input type="date"
                    className='Movies-Update-inputs'
                    name='datePremiere'
                    required={true}
                    value={premiereDate}
                    onChange={(event) => setPremiereDate(event.target.value)}
                />

                <label htmlFor="dateExit" className='Movies-Update-label'>Fecha de salida:</label>
                <input type="date"
                    className='Movies-Update-inputs'
                    name='dateExit'
                    required={true}
                    value={exitDate}
                    onChange={(event) => setExitDate(event.target.value)}
                />

                <label htmlFor="selectCategory" className='Movies-Update-label'>Categorias:</label>
                <select name="selectCategory" id="movie-select-category" className="Movies-Update-comboBox" multiple>
                    
                    <option >{categorie}</option>
{/*                     {category.map((cat, i) => (
                            <option value={cat.id} key={i}>{cat.category_name}</option>
                        ))} */}
                </select>

            </div>

            <div className='Movies-Update-Container'>
                <label htmlFor="" className='Movies-Update-label'>Actores:</label>
                <div className='Movies-Update-combo-link'>
                <select name="selectCategory" id="movie-select-actor" className="Movies-Update-comboBox" multiple>
                    <option >{actors}</option>
     {/*                {actor.map((act, i) => (
                            <option value={act.id} key={i}>{act.name_actor}</option>
                    ))} */}
                </select>
                    <button onClick={openModal}><img src={link} alt="link" className='actor-link' /></button>
                    <Modal isOpen={isOpenModal} closeModal={closeModal} title="Crear nuevo actor" x={"19%"} y={"310px"}>
                        <ActorCreate />
                    </Modal>
                </div>

                <div className='Movies-Update-Sent'>
                    <img src={movieTag} alt="employeUpdate" />
                    <h1> Publicar estreno</h1>
                    <span>Al publicar podrás ver los
                        cambios en tu app</span>
                    <button className='Movies-button-sent' type='submit'>Actualizar</button>
                </div>

            </div>
        </form>
    )
}
