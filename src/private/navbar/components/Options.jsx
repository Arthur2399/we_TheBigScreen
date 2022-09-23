import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../public/auth/context/AuthContext';
import './Options.css';
export const Options = () => {

    const { logout } = useContext( AuthContext );
    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        });
    }

    return (
        <div className="desktop-menu">
            <ul>
                <li>
                    <NavLink to="/">Mi perfil</NavLink>
                </li>
                <li>
                    <NavLink to="/password-change">Cambiar contraseña</NavLink>
                </li>
                <li>
                    <button  className="logout-button" onClick={onLogout}>Cerrar Sesion</button>
                </li>
            </ul>
        </div>
    )
}
