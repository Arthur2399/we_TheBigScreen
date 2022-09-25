import { API_IMAGE } from '../../../helper/routes';
import './MovieCard.css';

export const MovieCard = ({id,photo_movie,name_movie,openModal,setMovieId}) => {
    
    return (
        <div className="movie-cards animate__animated animate__fadeIn" onClick={()=>{openModal(); setMovieId(id)}}>
            <img src={`${API_IMAGE}${photo_movie}`} alt="movie" />
            <p>{name_movie}</p>
        </div>
    )
}
