import { API_IMAGE } from '../../../helper/routes';
import './AwardsCard.css';

export const AwardsCard = ({id,name_award, photo_award,number_award,openModal,setAwardId}) => {
  return (
    <div className="awards-cards animate__animated animate__fadeIn">
      <img src={`${API_IMAGE}${photo_award}`} alt="movie" onClick={()=>{openModal(); setAwardId(id)}}/>
      {/* <h1>{name_award}</h1> */}
      <p>{number_award} pts.</p>
    </div>
  )
}
