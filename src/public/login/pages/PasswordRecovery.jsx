import './PasswordRecovery.css';

export const PasswordRecovery = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src="" alt="" className="logo" />
        <h1 className="title">¡El correo ha sido enviado!</h1>
        <p className="subtitle">Por favor revisa en tu bandeja de entrada las intrucciones para resetear la contraseña</p>
        <div className="email-image">
          <img src="./icons/email.svg" alt="email" />
        </div>
        <button className="primary-button login-button">Ingresar</button>
        <p className="resend">
          <span>¿No recibiste el correo?</span>
          <a href="/">Reenviar</a>
        </p>
      </div>
    </div>
  )
}
