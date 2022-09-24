import { Modal } from '../../../components';
import { useModal } from '../../../hooks';
import { ActorCreate } from './ActorCreate';
import movieTag from '/assets/logos/Movie-tag.svg';
import link from '/assets/icons/link.png';
import './MovieCreate.css';
import { useState } from 'react';

export const MovieCreate = () => {
    const [isOpenModal, openModal, closeModal] = useModal(false);
    const [postImage, setPostImage] = useState('');

 const [categoria, setCategoria] = useState([
	{
		"id": 1,
		"category_name": "Acción"
	},
	{
		"id": 2,
		"category_name": "Aventuras"
	},
	{
		"id": 3,
		"category_name": "Ciencia Ficción"
	},
	{
		"id": 4,
		"category_name": "Comedia"
	},
	{
		"id": 5,
		"category_name": "Documental"
	},
	{
		"id": 6,
		"category_name": "Drama"
	},
	{
		"id": 7,
		"category_name": "Fantasía"
	},
	{
		"id": 8,
		"category_name": "Musical"
	},
	{
		"id": 9,
		"category_name": "Suspenso"
	},
	{
		"id": 10,
		"category_name": "Terror"
	},
	{
		"id": 11,
		"category_name": "Animación"
	}
])

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

        var selectObject =document.getElementById("movie-select-category");
        const categorySelect = [];
        let j = 0;
        for (var i = 0; i < selectObject.options.length; i++) {
            if(selectObject.options[i].selected ==true){  
                    categorySelect[j] = parseInt(selectObject.options[i].value);
                    j++
              }
          }

          //console.log(categorySelect);

        const movieData = {
            name_movie: event.target.elements.movieName.value,
            description_movie: event.target.elements.sipnopsis.value,
            duration_movie: event.target.elements.duration.value,
            premiere_date_movie: event.target.elements.datePremiere.value,
            departure_date_movie: event.target.elements.dateExit.value,
            category_movie_id: categorySelect,
            actor_movie_id: event.target.elements.selectActor.value,
            photo_movie: postImage,
        }
        console.log(movieData)
        //const resp = await usePostEmploye(JSON.stringify(userData));
    }


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
                <input  className='Movie-button-portada'
                        type='file'
                        name='fotoUpload'
                        accept="image/png, .jpeg, .jpg, image/gif"
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
                <select name="selectCategory" id= "movie-select-category"className="Movies-Create-comboBox"multiple>
                    {
                        categoria.map((cat, i)=>(
                            <option value={cat.id} key={i}>{cat.category_name}</option>
                        ))
                    }
                </select>

            </div>

            <div className='Movies-Create-Container'>
                <label htmlFor="" className='Movies-Create-label'>Actores:</label>
                <div className='Movies-Create-combo-link'>
                    <select name="selectActor" className="Movies-Create-comboBox">
                        <option value="value2">Adam Sandler</option>
                    </select>
                    <button onClick={openModal}><img src={link} alt="link" className='actor-link' /></button>
                    <Modal isOpen={isOpenModal} closeModal={closeModal} title="Crear nuevo actor" x={"19%"} y={"310px"}>
                        <ActorCreate />
                    </Modal>
                </div>

                <div className='Movies-Create-Summary'>
                    <div className='Empoye-Create-delete'>
                        <span>Adam Sandler</span>
                        <button> x </button>
                    </div>
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
