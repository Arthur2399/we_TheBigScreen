import { useState } from 'react';
import { Options } from '../components/Options';
import './Menu.css';

export const Menu = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <nav>
            <div className="navbar-left">
                <a href="/" className="nav-logo"><img src='' alt=" logo" /></a>
                <ul>
                    <li>
                        <a href="employes">Empleados</a>
                    </li>
                    <li>
                        <a href="movies">Películas</a>
                    </li>
                    <li>
                        <a href="survey">Encuestas</a>
                    </li>
                    <li>
                        <a href="awards">Premios</a>
                    </li>
                    <li>
                        <a href="accredit">Créditos</a>
                    </li>
                    <li>
                        <a href="exchange">Canjear</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navBar-email" onClick={handleToggle}>
                        Arthur Chavez
                    </li>
                    <li className="navBar-user" onClick={handleToggle}>
                        <img src='' alt="User" />
                    </li>
                </ul>
            </div>
            {toggle &&<Options/>}
        </nav>
    )
}
