import movieTag from '/assets/logos/Movie-tag.svg';
import link from '/assets/icons/link.png';
import './MovieCreate.css';
import { useGetActors, useGetCategories, usePostMovie } from '../hooks';
import { useForm } from '../../../hooks/useForm';
import { useEffect, useState } from 'react';



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


export const MovieCreate = () => {

    const [categories, setCategories] = useState([]);
    const [actors, setActors] = useState([]);

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
        photo_movie,
        premiere_date_movie,
    } = useForm(formData);

    const onCreateMovie = async (event) => {
        event.preventDefault();
        /*         const { resp, response } = await usePostMovie()
                console.log(resp, response) */
        console.log(formState)
    }

    useEffect(() => {
        async function fetchData() {
            const respCategories = await useGetCategories();
            const respActors = await useGetActors();
            setActors(respActors);
            setCategories(respCategories)
        }
        fetchData();
    }, [])


    const filterOptions = () => {
        let input = document.getElementById("searchInput");
        let filter = input.value.toUpperCase();
        let select = document.getElementById("actor_movie_id");
        let options = select.options;

        for (let i = 0; i < options.length; i++) {
            let option = options[i];
            if (option.text.toUpperCase().indexOf(filter) > -1) {
                option.style.display = "";
            } else {
                option.style.display = "none";
            }
        }
    }


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
                    {
                        categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.category_name}</option>
                        ))
                    }
                </select>

            </div>

            <div className='Movies-Create-Container'>
                <label className='Movies-Create-label'>Actores:</label>
                <input
                    type="text"
                    className='Movies-Create-inputs search'
                    placeholder='Buscar un actor...'
                    id="searchInput"
                    onKeyUp={filterOptions}
                />
                <div className='Movies-Create-combo-link'>
                    <select
                        className="Movies-Create-comboBox"
                        multiple
                        id='actor_movie_id'
                        name="actor_movie_id"
                        value={actor_movie_id}
                        onChange={onInputChangeMultiselect}
                    >
                        {
                            actors.map((actor) => (
                                <option key={actor.id} value={actor.id}>{actor.name_actor}</option>
                            ))
                        }
                    </select>
                    <button ><img src={link} alt="link" className='actor-link' /></button>
{/*                     <Modal isOpen={isOpenModal} closeModal={closeModal} title="Crear nuevo actor" x={"19%"} y={"310px"}>
                        <ActorCreate />
                    </Modal> */}
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
