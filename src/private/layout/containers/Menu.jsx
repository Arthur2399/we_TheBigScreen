import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Options } from '../components/Options';
import logo from'../../../assets/logos/tbs_logo.svg';
import user from '../../../assets/icons/user.svg'
import './Menu.css';

export const Menu = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <nav>
            <div className="navbar-left">
                <a href="/" className="nav-logo"><img src={logo} alt=" logo" /></a>
                <ul>
                    <li>
                        <NavLink to ="employes">Empleados</NavLink>
                    </li>
                    <li>
                        <NavLink to ="movies">Películas</NavLink>
                    </li>
                    <li>
                        <NavLink to ="survey">Encuestas</NavLink>
                    </li>
                    <li>
                        <NavLink to ="awards">Premios</NavLink>
                    </li>
                    <li>
                        <NavLink to="accredit">Créditos</NavLink>
                    </li>
                    <li>
                        <NavLink to="exchange">Canjear</NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navBar-email" onClick={handleToggle}>
                        Arthur Chavez
                    </li>
                    <li className="navBar-user" onClick={handleToggle}>
                        <img src={user} alt="User" />
                    </li>
                </ul>
            </div>
            {toggle &&<Options/>}
        </nav>
    )
}
