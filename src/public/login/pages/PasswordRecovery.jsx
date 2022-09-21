import { useNavigate } from 'react-router-dom';
import password from '/assets/icons/padlock.png';
import { API_WHATSAPP } from '../../../helper/routes';

import './PasswordRecovery.css';

export const PasswordRecovery = () => {

  const navigate = useNavigate();
  const onPassword =() =>{
     navigate('/email-sent',{
      repalce:true  
    });
  }

  return (
    <div className="password-recovery">
      <div className="form-container">
        <img  className='password-logo' src={password} alt="password" />
        <h1 className="title">Recuperación de contraseña</h1>
        <p className="subtitle">Por favor ingresa tu correo para verificar tu cuenta</p>
        <input type="text" className='input' placeholder='email@example.com'/> 
        <button className="primary-button password-recovery-button" onClick={onPassword}>Siguiente</button>
        <p className="resend">
          <span>¿No estas registrado?</span>
          <a href={API_WHATSAPP}>  Solicitar ayuda</a>
        </p>
      </div>
    </div>
  )
}
