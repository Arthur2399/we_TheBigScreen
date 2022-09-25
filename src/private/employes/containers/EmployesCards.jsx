import { useEffect, useState } from 'react';
import { Modal } from '../../../components/Modal';
import { useModal } from '../../../hooks';
import { EmployesCard } from '../components';
import { EmployeUpdate } from '../components/EmployeUpdate';
import { useGetEmployesList } from '../hooks/useGetEmployes';
import './EmployesCards.css';

export const EmployesCards = () => {
    const [cardsEmployes, setCardsEmployes] = useState([]);
    const [isOpenModal,openModal,closeModal] = useModal(false);
    const [employeId, setEmployeId] = useState()

    useEffect(() => {
        async function fetchData() {
            const respEmp = await useGetEmployesList();
            setCardsEmployes(respEmp)
        }
        fetchData();
    }, [])
    return (
        <div className="cards-container">
            {cardsEmployes.map((employe)=>(
                    <EmployesCard  key={employe.id} {...employe} openModal={openModal} setEmployeId={setEmployeId}/>
                ))}

            <Modal isOpen={isOpenModal} closeModal={closeModal} title="Actualizar empleado" x={"80%"} y={"580px"}>
                <EmployeUpdate employeId={employeId}/>
            </Modal>
        </div>
    )
}
