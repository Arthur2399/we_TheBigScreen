import { useState } from 'react';
import { useModal } from '../../../hooks';
import { BillboardCard } from '../components/BillboardCard';

export const BillboardsCards = ({ movieList}) => {

    return (
        <div className="cards-container ">
            {movieList.map((movie) => (
                <BillboardCard key={movie.id} {...movie}/>
            ))}
        </div>
    )
}
