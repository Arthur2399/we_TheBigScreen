import movieTag from '../../../assets/logos/Movie-tag.svg';
import link from '../../../assets/icons/link.png';
import { Modal } from '../../../components/Modal';
import { useModal } from '../../../hooks/useModal';
import './MovieCreate.css';
import { ActorCreate } from './ActorCreate';

export const MovieCreate = () => {
    const [isOpenModal, openModal, closeModal] = useModal(false);

    return (
        <div className='Movies-Create'>
            <div className='Movies-Create-Container'>
                <label htmlFor="" className='Movies-Create-label'>Nombre:</label>
                <input type="text" className='Movies-Create-inputs' />

                <label htmlFor="" className='Movies-Create-label'>Sipnosis:</label>
                <textarea className='Movies-Create-inputs-TextArea' name="" id="" cols="30" rows="10"></textarea>

                <label htmlFor="" className='Movies-Create-label' >Duración:</label>
                <input type="time" className='Movies-Create-inputs' />

                <label htmlFor="" className='Movies-Create-label'>Portada:</label>
                <div className='Movies-Create-UploadPhoto'>
                    <button>Subir</button>
                    <span>Suba una portada...</span>
                </div>
            </div>

            <div className='Movies-Create-Container'>
                <label htmlFor="" className='Movies-Create-label'>Fecha de estreno:</label>
                <input type="text" className='Movies-Create-inputs' />

                <label htmlFor="" className='Movies-Create-label'>Fecha de salida:</label>
                <input type="text" className='Movies-Create-inputs' />

                <label htmlFor="" className='Movies-Create-label'>Categorias:</label>
                <select name="select" className="Movies-Create-comboBox">
                    <option value="value1" >Seleccione uno</option>
                    <option value="value2">Comedia</option>
                </select>

                <div className='Movies-Create-Summary'>
                    <div className='Empoye-Create-delete'>
                        <span>Comedia</span>
                        <button> x </button>
                    </div>
                </div>
            </div>

            <div className='Movies-Create-Container'>
                <label htmlFor="" className='Movies-Create-label'>Actores:</label>
                <div className='Movies-Create-combo-link'>
                    <select name="select" className="Movies-Create-comboBox">
                        <option value="value1" >Seleccione uno</option>
                        <option value="value2">Adam Sandler</option>
                    </select>

                    <button   onClick={openModal}><img src={link} alt="link" className='actor-link'/></button>
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
                    <button className='Movies-button-sent'>Publicar</button>
                </div>

            </div>
        </div>
    )
}
