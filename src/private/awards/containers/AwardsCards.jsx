import { AwardsCard } from '../components';
import { Modal } from '../../../components/Modal';
import { useModal } from '../../../hooks';
import { useGetAwardsList } from '../hooks/useGetAwards';
import { useEffect, useState } from 'react';
import { AwardsUpdate } from '../components/AwardsUpdate';
import './AwardsCards.css';

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
                <AwardsUpdate awardId={awardId}/>                            
            </Modal>

        </div>
    )
}
