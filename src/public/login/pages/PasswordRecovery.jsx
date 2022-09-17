import email from '../../../assets/icons/email.svg';
import logo from '../../../assets/logos/tbs_logo.svg'

import './PasswordRecovery.css';

export const PasswordRecovery = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src={logo} alt="email" className="logo" />
        <h1 className="title">¡El correo ha sido enviado!</h1>
        <p className="subtitle">Por favor revisa en tu bandeja de entrada las intrucciones para resetear la contraseña</p>
        <div className="email-image">
          <img src={email} alt="email" />
        </div>
        <button className="primary-button login-button">Ingresar</button>
        <p className="resend">
          <span>¿Recibiste el correo?</span>
          <a href="/">Ingresar</a>
        </p>
      </div>
    </div>
  )
}
