import { useEffect, useState } from 'react';
import { API_IMAGE } from '../../../helper/routes';
import { useGetMoviesBest } from '../hooks/useGetBestMovie';
import './BestFilm.css';

export const BestFilm = () => {

    const [bestMovie, setBestMovie] = useState([])
    useEffect(() => {
        async function fetchData() {
            const respMovB = await useGetMoviesBest();
            setBestMovie(respMovB)
        }
        fetchData();
    }, [])

    return (
        <div className="best-film-info animate__animated animate__fadeIn">
            <img src={`${API_IMAGE}${BestFilm.photo_movie}`} alt="movie" />
            <div className="best-film-info-text">
                <h1>{BestFilm.photo_movie}</h1>
                <div className="best-film-grid">
                    <span>Calificacion:</span>
                    <span> {BestFilm.stars} estellas</span>
                    <span>Vistas:</span>
                    <span>{BestFilm.views} vistas</span>
                </div>
            </div>
        </div>
    )
}
