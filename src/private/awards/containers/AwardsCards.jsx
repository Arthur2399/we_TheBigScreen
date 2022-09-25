import { AwardsCard } from '../components';
import { Modal } from '../../../components/Modal';
import { useModal } from '../../../hooks';
import { useGetAwardsList } from '../hooks/useGetAwards';
import './AwardsCards.css';
import { useEffect, useState } from 'react';

export const AwardsCards = () => {

    const [cardsAwards, setCardsAwards] = useState([]);
    const [isOpenModal,openModal,closeModal] = useModal(false);
    const [awardId, setAwardId] = useState()

    useEffect(() => {
        async function fetchData() {
            const respAwr = await useGetAwardsList();
            setCardsAwards(respAwr)
        }
        fetchData();
    }, [])


    return (
        <div className="award-cards-container">
            {cardsAwards.map((award)=>(
                <AwardsCard key={award.id} {...award} openModal={openModal} setAwardId={setAwardId}/>
            ))}
            <Modal isOpen={isOpenModal} closeModal={closeModal} title="Actualizar premio" x={"80%"} y={"580px"}>
                {/* Poner el ID como props */}
            </Modal>
        </div>
    )
}
