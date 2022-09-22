import { Link, useNavigate } from 'react-router-dom';
import { loginForm } from '../hooks/usePostLogin';
import logo from '/assets/logos/tbs_logo.svg'
import './Login.css';
import { useState } from 'react';
import { useEffect } from 'react';


export const Login = () => {

  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const handleChange= () =>{}
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      username: event.target.elements.username.value,
      password: event.target.elements.password.value,
    }
    const token = await loginForm(JSON.stringify(userData))
    if(token.access){
      const sessionActivate = token.access;
      sessionStorage.setItem('jwt',sessionActivate);
      navigate('/',{
        repalce:true  
      });
    }else {
      setMessage ('Contraseña o usuario invalidos');
    }
  }

  useEffect(() => {
    setMessage('')
  }, [handleChange])
  
  return (
    <div className="Login">
      <div className="Login-form-container">
        <img src={logo} alt="Logo" className="Login-logo" />


        <form onSubmit={handleSubmit} className="form">

          <label htmlFor="username" className="label">Correo electrónico</label>
          <input type="text"
                 name="username" 
                 placeholder="ejemplo@email.com" 
                 className="input input-email" 
                 autoComplete='off'
                 onChange={handleChange}
                 />
          
          <label htmlFor="password" className="label">Contraseña</label>
          <input type="password" 
                 name="password" 
                 placeholder="*********" 
                 className="input input-password" 
                 onChange={handleChange}
                 />
          <span>{message}</span>

          <button
            className="primary-button login-button"
            type="submit"
          >Ingresar
          </button>
          <Link to="/password-recovery">Olvidé mi contraseña</Link>
        </form>



      </div>
    </div>
  )
}
