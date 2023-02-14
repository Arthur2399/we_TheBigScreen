import { Modal } from '../../../components';
import { useModal } from '../../../hooks';
import { MovieCreate } from '../components';
import movie from '/assets/logos/movie.svg';
import './MovieCreateInfo.css';

export const MovieCreateInfo = ({ setIsReload, isReload }) => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  return (
    <div className="Movies-premiere-container">
      <div className="Movies-premiere-create-text">
        <h2>Ingresa un nuevo estreno</h2>
        <p>Registra el próximo gran hit de tu cine.</p>
        <button className="Movies-premiere-create-button" onClick={openModal}> ingresar pelicula</button>
        <Modal isOpen={isOpenModal} closeModal={closeModal} title="Crear nueva pelicula" x={"80%"} y={"580px"}>
          <MovieCreate setIsReload={setIsReload} isReload={isReload} closeModal={closeModal} />
        </Modal>
      </div>
      <img src={movie} alt="movie" />
    </div>
  )
}
