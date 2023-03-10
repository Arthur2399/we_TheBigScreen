import { useState } from 'react';
import { Modal } from '../../../components/Modal';
import { useModal } from '../../../hooks/useModal';
import { BillboardCard } from '../components/BillboardCard';
import { BillboardForm } from '../components/BillboardForm';

export const BillboardCards = ({ movieList, setIsReload, isReload }) => {
    const [isOpenModal, openModal, closeModal] = useModal(false);
    const [movieId, setMovieId] = useState();


    return (
        <div className="cards-container ">
            {movieList.map((movie) => (
                <BillboardCard key={movie.id} {...movie} openModal={openModal} setMovieId={setMovieId} />
            ))}
            <Modal isOpen={isOpenModal} closeModal={closeModal} title="Crear cartelera" x={"80%"} y={"580px"}>
                <BillboardForm movieId={movieId} setIsReload={setIsReload} isReload={isReload} closeModal={closeModal} isOpen={isOpenModal}/>
            </Modal>
        </div>
    )
}
