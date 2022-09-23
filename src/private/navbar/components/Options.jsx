import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Modal } from '../../../components';
import { useModal } from '../../../hooks';
import { AuthContext } from '../../../public/auth/context/AuthContext';
import Profile from '../../profile/page/Profile';
import './Options.css';
export const Options = () => {

    const { logout } = useContext( AuthContext );
    const navigate = useNavigate();

    const [isOpenModal,openModal,closeModal] = useModal(false);

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
                    <span  className='options' onClick={openModal}>Mi perfil</span>
                </li>
                <li>
                    <NavLink to={'password-change'} >Cambiar contraseña</NavLink >
                </li>
                <li>
                    <button  className="logout-button " onClick={onLogout}>Cerrar Sesion</button>
                </li>
                <Modal isOpen={isOpenModal} closeModal={closeModal} title="Mi perfil" x={"350px"} y={"580px"}>
                    <Profile/>
                </Modal>
            </ul>
        </div>
    )
}