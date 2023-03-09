import { useEffect, useMemo, useState } from 'react';
import { useForm } from '../../../hooks/useForm';
import { usePostActor } from '../hooks/usePostActor';
import { useFilterSelect } from '../../../hooks/useFilterSelect';
import { useGetActors, useGetCategories, usePostMovie } from '../hooks';
import Swal from 'sweetalert2';
import movieTag from '/assets/logos/Movie-tag.svg';
import link from '/assets/icons/link.png';
import './MovieCreate.css';
import { useGetMovie, usePutMovie } from '../hooks/usePutMovie';

/* const formData = {
    //MovieCreate 
    actor_movie_id: [],
    category_movie_id: [],
    departure_date_movie: '',
    description_movie: '',
    duration_movie: '',
    name_movie: '',
    photo_movie: '',
    premiere_date_movie: '',
    //Actor Create
    name_actor: '',
    photo_actor: '',
} */

export const MovieUpdate = ({ movieId, closeModal, setIsReload, isReload, isOpen }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [actors, setActors] = useState([]);
    const [newActor, setNewActor] = useState(false);
    const [movieData, setMovieData] = useState({})
    const [formData, setformData] = useState({
        //MovieCreate 
        actor_movie_id: [],
        category_movie_id: [],
        departure_date_movie: '',
        description_movie: '',
        duration_movie: '',
        name_movie: '',
        photo_movie: '',
        premiere_date_movie: '',
        //Actor Create
        name_actor: '',
        photo_actor: '',
    })

    const {
        onInputChange,
        onInputChangeImage,
        onInputChangeMultiselect,
        formState,
        actor_movie_id,
        category_movie_id,
        departure_date_movie,
        description_movie,
        duration_movie,
        name_movie,
        premiere_date_movie,
    } = useForm(formData);



    useMemo(() => {
        setformData({
            actor_movie_id: movieData.actor_movie || "",
            category_movie_id: movieData.category_movie || "",
            departure_date_movie: movieData.departure_date_movie || "",
            description_movie: movieData.description_movie || "",
            duration_movie: movieData.duration_movie || "",
            image_change: movieData.image_change || false,
            name_movie: movieData.name_movie || "",
            photo_movie: "",
            premiere_date_movie: movieData.premiere_date_movie || "",
        })
    }, [movieData])

    useMemo(async () => {
        if (movieId > 0) {
            const respCategories = await useGetCategories();
            setCategories(respCategories)
            const respActors = await useGetActors();
            setActors(respActors);
            const { response, resp } = await useGetMovie(movieId)
            {
                if (response.status == 200) {
                    setMovieData(resp)
                    setIsLoading(false)
                }
            }
        }
    }, [movieId, isOpen])

    const { filterOptions } = useFilterSelect('searchActorUpdate', 'actor_movie_id_update');

    const onUpdateMovie = async (event) => {
        event.preventDefault();
        const data = {
            actor_movie_id: formState.actor_movie_id,
            category_movie_id: formState.category_movie_id,
            departure_date_movie: formState.departure_date_movie,
            description_movie: formState.description_movie,
            duration_movie: formState.duration_movie,
            image_change: movieData.image_change,
            name_movie: formState.name_movie,
            photo_movie: formState.photo_movie,
            premiere_date_movie: formState.premiere_date_movie,

        }
        const des_answer = await Swal.fire({
            title: '¿Seguro que actualizar esta película?',
            showCancelButton: true,
            confirmButtonText: 'Actualizar',
            confirmButtonColor: "#FD5D5D"
        })
        if (des_answer.isConfirmed) {
            const { resp, response } = await usePutMovie(JSON.stringify(data), movieId);
            if (response.status == 200) {
                closeModal();
                Swal.fire({
                    icon: 'success',
                    title: 'Película actualizada correctamente',
                    text: resp.Mensaje,
                    confirmButtonColor: "#FD5D5D"
                })
                setIsReload(isReload + 1);
            } else {
                const fisrtKey = Object.keys(resp)[0]
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: resp[fisrtKey],
                    confirmButtonColor: "#FD5D5D"
                })
            }
        }
    }

    const onCreateActor = async () => {
        const data = {
            name_actor: formState.name_actor,
            photo_actor: formState.photo_actor,
        }
        const { resp, response } = await usePostActor(JSON.stringify(data))
        if (response.status == 201) {
            Swal.fire({
                icon: 'success',
                title: 'Actor creado',
                text: resp.Mensaje,
                confirmButtonColor: "#FD5D5D"
            })
            setNewActor(!newActor)
        } else {
            const fisrtKey = Object.keys(resp)[0]
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: resp[fisrtKey],
                confirmButtonColor: "#FD5D5D"
            })
        }
    }

    const onChangeNewActor = () => {
        setNewActor(!newActor);
    }



    return (
        <form onSubmit={onUpdateMovie} className='Movies-Create'>
            <div className='Movies-Create-Container'>
                <label className='Movies-Create-label'>Nombre:</label>
                <input
                    type="text"
                    className='Movies-Create-inputs'
                    name="name_movie"
                    value={name_movie}
                    onChange={onInputChange}
                />
                <label className='Movies-Create-label'>Sipnosis:</label>
                <textarea
                    className='Movies-Create-inputs-TextArea'
                    cols="30"
                    rows="10"
                    name="description_movie"
                    value={description_movie}
                    onChange={onInputChange}

                />
                <label className='Movies-Create-label' >Duración:</label>
                <input
                    type="time"
                    className='Movies-Create-inputs'
                    name='duration_movie'
                    value={duration_movie}
                    onChange={onInputChange}
                />
                <label className='Movies-Create-label'>Portada:</label>
                <input
                    className='Movie-button-portada'
                    type='file'
                    accept="image/png, .jpeg, .jpg, image/gif"
                    name='photo_movie'
                    onChange={onInputChangeImage}
                />
            </div>
            <div className='Movies-Create-Container'>
                <label className='Movies-Create-label'>Fecha de estreno:</label>
                <input
                    type="date"
                    className='Movies-Create-inputs'
                    name='premiere_date_movie'
                    value={premiere_date_movie}
                    onChange={onInputChange}
                />
                <label className='Movies-Create-label'>Fecha de salida:</label>
                <input
                    type="date"
                    className='Movies-Create-inputs'
                    name='departure_date_movie'
                    value={departure_date_movie}
                    onChange={onInputChange}

                />
                <label className='Movies-Create-label'>Categorias:</label>
                <select
                    className="Movies-Create-comboBox"
                    multiple
                    name="category_movie_id"
                    value={category_movie_id}
                    onChange={onInputChangeMultiselect}
                >
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>{category.category_name}</option>
                    ))}
                </select>
            </div>

            <div className='Movies-Create-Container'>
                <label className='Movies-Create-label'>Actores:</label>
                <div className='Movies-Create-combo-link'>
                    <input
                        type="text"
                        className='Movies-Create-inputs search'
                        placeholder='Buscar un actor...'
                        id="searchActorUpdate"
                        onKeyUp={filterOptions}
                    />
                    <button onClick={onChangeNewActor} type='button' title='Crear actor'><img src={link} alt="link" className='actor-link' /></button>
                </div>
                <select
                    className="Movies-Create-comboBox"
                    multiple
                    id='actor_movie_id_update'
                    name="actor_movie_id"
                    value={actor_movie_id}
                    onChange={onInputChangeMultiselect}
                >
                    {actors.map((actor) => (
                        <option key={actor.id} value={actor.id}>{actor.name_actor}</option>
                    ))}
                </select>

                {newActor === false
                    ? <div className='Movies-Create-Sent animate__animated animate__fadeIn'>
                        <img src={movieTag} alt="employeCreate" />
                        <h1> Publicar estreno</h1>
                        <span>Al publicar podrás ver los
                            cambios en tu app</span>
                        <button className='Movies-button-sent' type='submit'>Actualizar</button>
                    </div>

                    : <div className='Actor-Create animate__animated animate__fadeIn'>
                        <h4>Crear nuevo actor</h4>
                        <label className='Actor-Create-label'>Nombre:</label>
                        <input
                            type="text"
                            className='Actor-Create-inputs'
                            name='name_actor'
                            value={name_actor}
                            onChange={onInputChange}
                        />
                        <label className='Actor-Create-label'>Foto:</label>
                        <input
                            className='Actor-Create-inputs-photo'
                            type='file'
                            accept="image/png, .jpeg, .jpg, image/gif"
                            name='photo_actor'
                            onChange={onInputChangeImage}
                        />
                        <div className='Actor-Create-Conatainer'>
                            <button className='Actor-Create-button Actor-summit' onClick={onChangeNewActor} type='button'>Volver</button>
                            <button className='Actor-Create-button Actor-summit' onClick={onCreateActor} type='button'>Añadir</button>
                        </div>
                    </div>
                }
            </div>
        </form>
    )
}
