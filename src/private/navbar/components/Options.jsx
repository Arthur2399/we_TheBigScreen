import { NavLink, useNavigate } from 'react-router-dom';
import './Options.css';
export const Options = () => {

    const navigate = useNavigate();

    const onLogout = () => {
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
