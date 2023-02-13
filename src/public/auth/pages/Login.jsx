import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { loginForm } from '../hooks/usePostLogin';
import { PacmanLoader } from 'react-spinners';
import Swal from 'sweetalert2';
import logo from '/assets/logos/tbs_logo.svg'
import './Login.css';


export const Login = () => {
  const { login } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true)
    const lastPath = localStorage.getItem('lastPath') || '/';
    const userData = {
      username: event.target.elements.username.value,
      password: event.target.elements.password.value,
    }
    const token = await loginForm(JSON.stringify(userData))
    if (token.access) {
      const sessiontoken = token.access;
      login(sessiontoken)
      navigate(lastPath, {
        repalce: true
      });
    }
    else {
      setIsLoading(false)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: "Contraseña o usuario incorrecto",
        confirmButtonColor: "#FD5D5D"
      })
    }
  }

  return (
    <div className="Login">
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
        : <div className="Login-form-container">
          <img src={logo} alt="Logo" className="Login-logo" />

          <form onSubmit={handleSubmit} className="form">

            <label htmlFor="username" className="label">Correo electrónico</label>
            <input type="text"
              name="username"
              placeholder="ejemplo@email.com"
              className="input input-email"
              autoComplete="username"
            />
            <label htmlFor="password" className="label">Contraseña</label>
            <input type="password"
              name="password"
              placeholder="*********"
              className="input input-password"
              autoComplete="current-password"
            />
            <button
              className="primary-button login-button"
              type="submit"
            >Ingresar
            </button>
            <Link to="/auth/password-recovery">Olvidé mi contraseña</Link>
          </form>

        </div>
      }
    </div>
  )
}
