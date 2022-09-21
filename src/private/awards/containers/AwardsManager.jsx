import { Modal } from '../../../components/index';
import { useModal } from '../../../hooks/index';
import { AwardsForm } from '../components/index';
import gift from '../../../assets/logos/gift.svg';
import './AwardsManager.css';

export const AwardsManager = () => {
    const [isOpenModal,openModal,closeModal] = useModal(false);

    return (
        <div className="awards-container">
            <div className="awards-create-text">
                <h2>Ingresa un nuevo premio</h2>
                <p>Registra la recompensa para tus clientes</p>
                <button className="awards-create-button" onClick={openModal}> ingresar premio</button>
                <Modal isOpen={isOpenModal} closeModal={closeModal} title="Crear nuevo premio" x={"80%"} y={"580px"}>
                    <AwardsForm />
                </Modal>
            </div>
            <img src={gift} alt="" />
        </div>
    )
}
