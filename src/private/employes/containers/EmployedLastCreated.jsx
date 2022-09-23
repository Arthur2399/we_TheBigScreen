import { useEffect } from 'react';
import { useState } from 'react';
import { API_IMAGE} from '../../../helper/routes';
import { useGetEmployesLast } from '../hooks/useGetLastCreated';
import './EmployedLastCreated.css';


export const EmployedLastCreated = () => {

    const [empLast, setEmpLast] = useState([])

    useEffect(() => {
        async function fetchData() {
            const respEmp = await useGetEmployesLast();
            setEmpLast(respEmp)
        }
        fetchData();
    }, [])


    return (
        <div className="employ-last-create-info animate__animated animate__fadeIn">
            <img src={`${API_IMAGE}${empLast.image}`} alt="employe" />
            <div className="employ-last-create-info-text">
                <h1>{`${empLast.first_name} ${empLast.last_name}`} </h1>
                <div className="employ-last-create-grid">
                    <span>Creado el:</span>
                    <span>{empLast.date_joined}</span>
                    <span> Rol:</span>
                    <span>{empLast.rol}</span>
                </div>
            </div>
        </div>
    )
}
