import { API_IMAGE} from '../../../helper/routes';
import './EmployesCard.css';

export const EmployesCard = ({id,first_name, last_name,rol,image,openModal,setEmployeId}) => {
    return (
        <div className="employ-cards animate__animated animate__fadeIn" onClick={()=>{openModal(); setEmployeId(id)}} >
            <img src={`${API_IMAGE}${image}`} alt="employes" />
            <p>{first_name}</p>
            <p>{last_name}</p>
            <p>{rol}</p>
        </div>
    )
}
