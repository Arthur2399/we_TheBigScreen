import { API_IMAGE } from '../../../helper/routes';
import './ExchangeCard.css'

export const ExchangeCard = ({id, photo_award,number_award,setAwardId}) => {
    return (
        <div className="exchange-cards animate__animated animate__fadeIn">
              <img src={`${API_IMAGE}${photo_award}`} alt="movie" onClick={()=>{setAwardId(id)}}/>
               <p>{number_award} pts.</p>
        </div>
    )
}
