import { API_IMAGE } from '../../../helper/routes';
import './BillboardCard.css';

export const BillboardCard = ({id,movie_name,movie_photo,setbillboardID}) => {
    return (
        <div className="Billboard-cards animate__animated animate__fadeIn">
            <img src={`${API_IMAGE}${movie_photo}`} alt="movie" onClick={()=>{setbillboardID(id)}}/>
            <p>{movie_name}</p>
        </div>
    )
}
