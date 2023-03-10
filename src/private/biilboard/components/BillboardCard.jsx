import { API_IMAGE } from '../../../helper/routes';
import './BillboardCard.css';

export const BillboardCard = ({id,photo_movie,name_movie}) => {
    console.log(photo_movie)
    
    return (
        <div className="billboard-cards animate__animated animate__fadeIn" >
            <img src={`${API_IMAGE}${photo_movie}`} alt="movie" />
            <p>{name_movie}</p>
        </div>
    )
}
