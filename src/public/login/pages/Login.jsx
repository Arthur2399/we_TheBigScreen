import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logos/tbs_logo.svg'
import'./Login.css';


export const Login = () => {

    const navigate = useNavigate();
    const onLogin =() =>{
       navigate('/',{
        repalce:true  
      });
    }

  return (
    <div className="Login">
    <div className="Login-form-container">
        <img src={logo} alt="" className="Login-logo" />
        <form action="/" className="form">
            <label htmlFor="email" className="label">Correo electrónico</label>
            <input type="text" name="email" placeholder="ejemplo@email.com" className="input input-email" />
            <label htmlFor="password" className="label">Contraseña</label>
            <input type="password" name="password" placeholder="*********" className="input input-password" />
            <button  
              className="primary-button login-button"
              onClick={onLogin}
            >Ingresar
            </button>
            <Link to="/password-recovery">Olvidé mi contraseña</Link>
        </form>
    </div>
</div>
  )
}
