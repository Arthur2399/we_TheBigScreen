import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Options } from '../components';
import { useEffect } from 'react';
import { useGetUser } from '../hooks/useGetEmployed';
import { useGetMenu } from '../hooks/useGetMenu';
import logo from '/assets/logos/tbs_logo.svg';
import user from '/assets/icons/user.svg'
import './Menu.css';

export const Menu = () => {
    const [userData, setUserData] = useState({});
    const [menuData, setMenuData] = useState([]);

    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    }

    useEffect(() => {
         async function fetchData(){
            const respMenu = await useGetMenu(); 
            const resp = await useGetUser();
            setUserData(resp[0]);
            setMenuData(respMenu);
         }  
        fetchData();
    },[])
    

    return (
        <nav>
            <div className="navbar-left">
                <NavLink to="/" className="nav-logo"><img src={logo} alt=" logo" /></NavLink>
                <ul>
                    {
                        menuData.map((opt)=>
                            (<li key={opt.id} >
                                <NavLink to={opt.path}
                                    className={({ isActive }) => `nav-item  ${isActive ? 'active' : ''}`}
                                >{opt.menu}</NavLink>
                            </li>
                        ))
                    }
                   
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navBar-email" onClick={handleToggle}>
                        {`${userData.first_name} ${userData.last_name}`}
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
