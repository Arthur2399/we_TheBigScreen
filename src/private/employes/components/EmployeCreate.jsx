import employePhoto from '/assets/logos/employes_photo.svg';
import employeCreate from '/assets/logos/employes_create.svg';
import { useEffect } from 'react';
import { useState } from 'react';
import { useGetRol } from '../hooks/useGetRol';
import { useGetBranchs } from '../hooks/useGetBranchs';
import { usePostEmploye } from '../hooks/usePostEmploye';
import './EmployeCreate.css';


export const EmployeCreate = () => {

    const [rol, setRol] = useState([])
    const [branch, setBranch] = useState([])
    const [postImage, setPostImage] = useState('');


    const handleFileUpload = (foto) => {
        const reader = new FileReader()
        reader.readAsDataURL(foto);
        reader.onload = function () {
            const base64 = reader.result
            setPostImage(base64);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userData = {
            first_name: event.target.elements.name.value,
            last_name: event.target.elements.lastName.value,
            username: event.target.elements.email.value,
            email: event.target.elements.email.value,
            branch_user_id: parseInt(event.target.elements.selectBranch.value),
            rol_id: parseInt(event.target.elements.selectRol.value),
            ci: event.target.elements.ci.value,
            birth: event.target.elements.dateBirth.value,
            image: postImage,
        }
        const resp = await usePostEmploye(JSON.stringify(userData));
    }


    useEffect(() => {
        async function fetchData() {
            const respR = await useGetRol();
            const respB = await useGetBranchs();
            setRol(respR);
            setBranch(respB);
        }
        fetchData();
    }, [])


    return (

        <form onSubmit={handleSubmit} className="Employe-Form">

            <div className='Employe-Create-Container'>
                <label htmlFor="" className='Employe-Create-label'>Nombre:</label>
                <input type="text"
                    className='Employe-Create-inputs'
                    name='name'
                    required={true}
                />

                <label htmlFor="" className='Employe-Create-label' >Apellido:</label>
                <input type="text"
                    className='Employe-Create-inputs'
                    name='lastName'
                    required={true}
                />

                <label htmlFor="" className='Employe-Create-label'>CI:</label>
                <input type="text"
                    className='Employe-Create-inputs'
                    name='ci'
                    required={true}
                    maxLength="10"
                />

                <label htmlFor="" className='Employe-Create-label'>Fecha de nacimiento:</label>
                <input type="date"
                    className='Employe-Create-inputs'
                    name='dateBirth'
                    required={true}
                />

                <label htmlFor="" className='Employe-Create-label'>Correo electrónico:</label>
                <input type="email"
                    className='Employe-Create-inputs'
                    name='email'
                    required={true}
                />
            </div>

            <div className='Employe-Create-Container'>

                <label htmlFor="" className='Employe-Create-label'>Rol:</label>
                <select name="selectRol" className="Employe-Create-comboBox">
                    {rol.map((rl, i) => (
                        <option value={rl.id} key={i} >{rl.name}</option>
                    ))}
                </select>

                <label htmlFor="" className='Employe-Create-label'>Sucursal:</label>
                <select name="selectBranch" className="Employe-Create-comboBox">
                    {branch.map((br, i) => (
                        <option value={br.id} key={i}>{br.name_branch}</option>
                    ))}
                </select>

                <div className='Employe-Create-UploadPhoto'>
                    <img src={employePhoto} alt="employes" />
                    <h1>Subir foto de empleados</h1>
                    <span>Sube una foto para que puedas reconocer rapidamente a los miembros de tu equipo</span>
                    <input
                        className='Employe-Create-UploadPhoto-button'
                        type='file'
                        name='fotoUpload'
                        accept="image/png, .jpeg, .jpg, image/gif"
                        onChange={(e) => handleFileUpload(e.target.files[0])}
                    />

                </div>

            </div>

            <div className='Employe-Create-Container'>
                <div className='Employe-Create-Sent'>
                    <img src={employeCreate} alt="employeCreate" />
                    <h1> Registrar empleado</h1>
                    <span>Ya estas a un paso de registrar al nuevo miembro de tu negocio</span>
                    <button className='button-sent' type='submit'>Crear empleado</button>
                </div>
            </div>
        </form>

    )
}
