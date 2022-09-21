import { useNavigate } from 'react-router-dom';
import email from '/assets/icons/email.svg';
import logo from '/assets/logos/tbs_logo.svg'
import { API_WHATSAPP } from '../../../helper/routes';

import './MessagePasswordRecovery.css';

export const MessagePasswordRecovery = () => {

  const navigate = useNavigate();
    const onLogin =() =>{
       navigate('/login',{
        repalce:true  
      });
    }

  return (
    <div className="login">
      <div className="form-container">
        <img src={logo} alt="email" className="logo" />
        <h1 className="title">¡El correo ha sido enviado!</h1>
        <p className="subtitle">Por favor revisa en tu bandeja de entrada las intrucciones para resetear la contraseña</p>
        <div className="email-image">
          <img src={email} alt="email" />
        </div>
        <button className="primary-button login-button" onClick={onLogin}>Ingresar</button>
        <p className="resend">
          <span>¿Recibiste el correo?</span>
          <a href={API_WHATSAPP}>  Solicitar ayuda</a>
        </p>
      </div>
    </div>
  )
}
