import { Modal } from '../../../components';
import { useModal } from '../../../hooks';
import employe from '/assets/logos/employe.svg';
import './EmployeCreateInfo.css';
import { EmployeCreate } from '../components/EmployeCreate';

export const EmployeCreateInfo = () => {

    const [isOpenModal,openModal,closeModal] = useModal(false);


    return (
        <div className="employ-container">
            <div className="employ-create-text">
                <h2>Ingresar empleado</h2>
                <p>Registra un nuevo compañero de trabajo</p>
                <button className="employ-create-button" onClick={openModal}> Registrar</button>
                <Modal isOpen={isOpenModal} closeModal={closeModal} title="Crear nuevo empleado" x={"80%"} y={"580px"}>
                    <EmployeCreate/>
                </Modal>
            </div>
            <img src={employe} alt="empleados" />

        </div>
    )
}
