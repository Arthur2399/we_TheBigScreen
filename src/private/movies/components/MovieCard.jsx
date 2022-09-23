import { API_IMAGE } from '../../../helper/routes';
import './MovieCard.css';

export const MovieCard = ({photo_movie,name_movie}) => {
    
    return (
        <div className="movie-cards animate__animated animate__fadeIn" >
            <img src={`${API_IMAGE}${photo_movie}`} alt="movie" />
            <p>{name_movie}</p>
        </div>
    )
}
