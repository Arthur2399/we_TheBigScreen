import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_WHATSAPP } from '../../../helper/routes';
import { PacmanLoader } from 'react-spinners';
import { usePostPasswordRecovery } from '../hooks/usePostPasswordRecovery';
import password from '/assets/icons/padlock.png';
import './PasswordRecovery.css';

export const PasswordRecovery = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const onEmailSent = () => {
    navigate('../email-sent', {
      repalce: true
    });
  }

  const onRecoveryPassword = async (event) => {
    event.preventDefault();
    setIsLoading(true)
    const data = {
      email: email
    }
    const { response } = await usePostPasswordRecovery(JSON.stringify(data));
    if (response.status == 201) {
      onEmailSent()
    }
  }

  return (
    <>
      <div className="password-recovery">
        {isLoading === true
          ? <>
            <PacmanLoader
              color="#FD5D5D"
              loading
              size={25}
              className="spinner_loading"
            />
            <p className='spinner_text'>cargando...</p>
          </>
          :
          <form className="form-container" onSubmit={onRecoveryPassword}>
            <img className='password-logo' src={password} alt="password" />
            <h1 className="title">Recuperación de contraseña</h1>
            <p className="subtitle">Por favor ingresa tu correo para verificar tu cuenta</p>
            <input
              type="email"
              className='input'
              placeholder='email@example.com'
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button className="primary-button password-recovery-button" type='submit' >Enviar</button>
            <p className="resend">
              <span>¿No estas registrado?</span>
              <a href={API_WHATSAPP}>  Solicitar ayuda</a>
            </p>
          </form>
        }
      </div>
    </>
  )
}
