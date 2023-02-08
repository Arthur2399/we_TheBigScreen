import { API_IMAGE} from '../../../helper/routes';
import candado from '/assets/icons/candado.png'
import './EmployesCard.css';

export const EmployesCard = ({id,first_name, last_name,rol,image,openModal,setEmployeId, is_active}) => {
    return (
        <div className="employ-cards animate__animated animate__fadeIn" onClick={()=>{openModal(); setEmployeId(id)}} >
            {is_active==false
                ?<div className='Banner'><img src={candado} alt="candado" /></div>
                :<></>
            }
            <img src={`${API_IMAGE}${image}`} className={is_active==false ?`disable`:""} alt="employes"/>
            <p>{first_name}</p>
            <p>{last_name}</p>
            <p>{rol}</p>
        </div>
    )
}
