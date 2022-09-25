import { API_IMAGE } from '../../../helper/routes';
import './AwardsCard.css';

export const AwardsCard = ({id, photo_award,number_award,openModal,setAwardId}) => {
  return (
    <div className="awards-cards animate__animated animate__fadeIn">
      <img src={`${API_IMAGE}${photo_award}`} alt="movie" onClick={()=>{openModal(); setAwardId(id)}}/>
      <p>{number_award} pts.</p>
    </div>
  )
}
