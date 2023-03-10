import { useState } from 'react';
import { useModal } from '../../../hooks/useModal';
import { BillboardCard } from '../components/BillboardCard';

export const BillboardCards = ({ movieList }) => {
    const [isOpenModal, openModal, closeModal] = useModal(false);
    const [movieId, setMovieId] = useState();


    return (
        <div className="cards-container ">
            {movieList.map((movie) => (
                <BillboardCard key={movie.id} {...movie} openModal={openModal} setMovieId={setMovieId} />
            ))}
        </div>
    )
}
