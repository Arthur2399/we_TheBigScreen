import { useEffect, useState } from 'react';
import { API_IMAGE } from '../../../helper/routes';
import { useGetProfile } from '../hooks/useGetProfile';
import './Profile.css'

const Profile = () => {

    const [userData, setUserData] = useState({});

    useEffect(() => {
        async function fetchData() {
            const resp = await useGetProfile();
            setUserData(resp[0]);
        }
        fetchData();
    }, [])


const mes ='todos'
    return (
        <div className='profile'>
            <img src={`${API_IMAGE}${userData.image}`} alt="profile" />
            <h1>{`${userData.first_name} ${userData.last_name}`}</h1>
            <span className='mail'>{userData.email}</span>
            <span className='branch'><b>Sucursal:</b> {userData.branch_user==null?'Todos':userData.branch_user}</span>
            <span className='rol'><b>Rol: </b>{userData.rol}</span>
            <div>
                <img src={`${API_IMAGE}${userData.qrprofile}`} alt="" className='qr'/>
          
            </div>
        </div>
    )
}

export default Profile