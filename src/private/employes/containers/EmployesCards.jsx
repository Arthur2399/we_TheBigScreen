import { useEffect, useState } from 'react';
import { Modal } from '../../../components/Modal';
import { useModal } from '../../../hooks';
import { EmployesCard } from '../components';
import { EmployeUpdate } from '../components/EmployeUpdate';
import './EmployesCards.css';

export const EmployesCards = ( {cardsEmployes,setIsReload}) => {
    const [isOpenModal,openModal,closeModal] = useModal(false);
    const [employeId, setEmployeId] = useState()

    return (
        <div className="cards-container">
            
             {cardsEmployes.map((employe)=>(
                    <EmployesCard  key={employe.id} {...employe} openModal={openModal} setEmployeId={setEmployeId}/>
                ))}
       
            <Modal isOpen={isOpenModal} closeModal={closeModal} title="Actualizar empleado" x={"80%"} y={"580px"}>
                <EmployeUpdate employeId={employeId} setIsReload={setIsReload} closeModal={closeModal}/>
            </Modal>
        </div>
    )
}
