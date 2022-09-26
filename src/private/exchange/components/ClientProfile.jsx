import { API_IMAGE } from '../../../helper/routes';
import './ClientProfile.css';

export const ClientProfile = ({clientData}) => {
  return (
    <div className="user-profile-info">
    <div className="user-profile-info-photo">
        {clientData.image
            ?<img src={`${API_IMAGE}${clientData.image}`} alt="user" />
            :<img src='../../assets/img/Premios.png' alt="user" />
        }
        {clientData.image
            ?<h2>{`${clientData.first_name} ${clientData.last_name}`}</h2>
            :<h2>Nombre del usuario</h2>
        }
        
    </div>
    <div className="user-profile-info-points">
        <div>
        {clientData.image
            ?<h2 className='user-profile-number'>{clientData.count_movies}</h2>
            :<h2>-</h2>
        }
            <span>Peliculas</span>
        </div>
        <div>
        {clientData.image
            ?<h2 className='user-profile-number'>{clientData.count_survey}</h2>
            :<h2>-</h2>
        }
            <span>Encuestas</span>
        </div>
        <div>
        {clientData.image
            ?<h2 className='user-profile-number'>{clientData.credit}</h2>
            :<h2>-</h2>
        }
            <span>Puntos</span>
        </div>
    </div>
</div>
  )
}
