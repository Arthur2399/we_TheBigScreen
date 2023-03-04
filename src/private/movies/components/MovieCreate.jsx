import { useEffect, useState } from 'react';
import { useForm } from '../../../hooks/useForm';
import { useGetActors, useGetCategories, usePostMovie } from '../hooks';
import { useFilterSelect } from '../../../hooks/useFilterSelect';
import { CreateActor } from './CreateActor';
import Swal from 'sweetalert2';
import movieTag from '/assets/logos/Movie-tag.svg';
import link from '/assets/icons/link.png';
import './MovieCreate.css';

const formData = {
    actor_movie_id: [],
    category_movie_id: [],
    departure_date_movie: '',
    description_movie: '',
    duration_movie: '',
    name_movie: '',
    photo_movie: '',
    premiere_date_movie: '',
}

export const MovieCreate = ({ setIsReload, isReload, closeModal }) => {

    const [categories, setCategories] = useState([]);
    const [actors, setActors] = useState([]);
    const [newActor, setNewActor] = useState(false);

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

    const { filterOptions } = useFilterSelect('searchActor', 'actor_movie_id');

    const onCreateMovie = async (event) => {
        event.preventDefault();
        const des_answer = await Swal.fire({
            title: '¿Seguro que deseas crear una nueva película?',
            showCancelButton: true,
            confirmButtonText: 'Crear',
            confirmButtonColor: "#FD5D5D"
        })
        if (des_answer.isConfirmed) {
            const { resp, response } = await usePostMovie(JSON.stringify(formState));
            if (response.status == 201) {
                closeModal();
                Swal.fire({
                    icon: 'success',
                    title: 'Película creada',
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

    useEffect(() => {
        async function fetchData() {
            const respCategories = await useGetCategories();
            const respActors = await useGetActors();
            setActors(respActors);
            setCategories(respCategories)
        }
        fetchData();
    }, [newActor])

    return (
        <form onSubmit={onCreateMovie} className='Movies-Create'>
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
                        id="searchActor"
                        onKeyUp={filterOptions}
                    />
                    <button onClick={() => { setNewActor(!newActor) }} type='button' title='Crear actor'><img src={link} alt="link" className='actor-link' /></button>
                </div>
                <select
                    className="Movies-Create-comboBox"
                    multiple
                    id='actor_movie_id'
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
                        <button className='Movies-button-sent' type='submit'>Publicar</button>
                    </div>

                    : <CreateActor newActor={newActor} setNewActor={setNewActor} />
                }
            </div>
        </form>
    )
}
