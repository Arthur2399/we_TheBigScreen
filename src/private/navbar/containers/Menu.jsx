import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Options } from '../components';
import logo from '../../../assets/logos/tbs_logo.svg';
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
                <NavLink to="/" className="nav-logo"><img src={logo} alt=" logo" /></NavLink>
                <ul>
                    <li>
                        <NavLink to="reports"
                            className={({ isActive }) => `nav-item  ${isActive ? 'active' : ''}`}
                        >Reportes</NavLink>
                    </li>
                    <li>
                        <NavLink to="employes"
                            className={({ isActive }) => `nav-item  ${isActive ? 'active' : ''}`}
                        >Empleados</NavLink>
                    </li>
                    <li>
                        <NavLink to="movies"
                            className={({ isActive }) => `nav-item  ${isActive ? 'active' : ''}`}
                        >Películas</NavLink>
                    </li>
                    <li>
                        <NavLink to="survey"
                            className={({ isActive }) => `nav-item  ${isActive ? 'active' : ''}`}
                        >Encuestas</NavLink>
                    </li>
                    <li>
                        <NavLink to="awards"
                            className={({ isActive }) => `nav-item  ${isActive ? 'active' : ''}`}
                        >Premios</NavLink>
                    </li>
                    <li>
                        <NavLink to="accredit"
                            className={({ isActive }) => `nav-item  ${isActive ? 'active' : ''}`}
                        >Créditos</NavLink>
                    </li>
                    <li>
                        <NavLink to="exchange"
                            className={({ isActive }) => `nav-item  ${isActive ? 'active' : ''}`}
                        >Canjear</NavLink>
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
            {toggle && <Options />}
        </nav>
    )
}
