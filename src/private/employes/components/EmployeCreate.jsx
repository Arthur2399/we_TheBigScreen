import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from '../../../hooks/useForm';
import { useGetRol, useGetBranchs, usePostEmploye } from '../hooks';
import employePhoto from '/assets/logos/employes_photo.svg';
import employeCreate from '/assets/logos/employes_create.svg';
import './EmployeCreate.css';
import Swal from 'sweetalert2';

const formData = {
    name: '',
    lastName: '',
    ci: '',
    birthDate: '',
    email: '',
    roll: '',
    branch: '',
    image: '',
}

export const EmployeCreate = ({closeModal, setIsReload}) => {

    const [rol, setRol] = useState([])
    const [branchID, setBranchID] = useState([])

    const {
        onInputChange,
        onInputChangeImage,
        formState,
        name,
        lastName,
        ci,
        birthDate,
        email,
    } = useForm(formData);

    const onCreateEmploye = async (event) => {
        event.preventDefault();
        const data = {
            first_name: formState.name,
            last_name: formState.lastName,
            username: formState.email,
            email: formState.email,
            ci: formState.ci,
            birth: formState.birthDate,
            rol_id: formState.roll,
            branch_user_id: formState.branch,
            image: formState.image,
        }

        const des_answer = await Swal.fire({
            title: '¿Seguro que deseas crear un nuevo empleado?',
            showCancelButton: true,
            confirmButtonText: 'Crear',
            confirmButtonColor: "#FD5D5D"
        })

        if (des_answer.isConfirmed) {
            const { resp, response } = await usePostEmploye(JSON.stringify(data));
            if (response.status == 201) {
                closeModal();
                Swal.fire({
                    icon: 'success',
                    title: 'Empleado creado',
                    text: resp.Mensaje,
                    confirmButtonColor: "#FD5D5D"
                })

                setIsReload(true);
            } else {
                const fisrtKey = Object.keys(resp)[0]
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: resp[fisrtKey],
                    confirmButtonColor: "#FD5D5D"
                })
            }
        }
    }

    useEffect(() => {
        async function fetchData() {
            const respR = await useGetRol();
            const respB = await useGetBranchs();
            setRol(respR);
            setBranchID(respB);
        }
        fetchData();
    }, [])


    return (
        <form onSubmit={onCreateEmploye} className="Employe-Form">

            <div className='Employe-Create-Container'>
                <label className='Employe-Create-label'>Nombre:</label>
                <input
                    type="text"
                    className='Employe-Create-inputs'
                    name="name"
                    value={name}
                    onChange={onInputChange}
                    required
                />

                <label className='Employe-Create-label' >Apellido:</label>
                <input
                    type="text"
                    className='Employe-Create-inputs'
                    name='lastName'
                    value={lastName}
                    onChange={onInputChange}
                    required
                />

                <label className='Employe-Create-label'>CI:</label>
                <input
                    type="number"
                    className='Employe-Create-inputs'
                    maxLength="10"
                    name='ci'
                    value={ci}
                    onChange={onInputChange}
                    required
                />

                <label className='Employe-Create-label'>Fecha de nacimiento:</label>
                <input
                    type="date"
                    className='Employe-Create-inputs'
                    name='birthDate'
                    value={birthDate}
                    onChange={onInputChange}
                    required
                />

                <label className='Employe-Create-label'>Correo electrónico:</label>
                <input type="email"
                    className='Employe-Create-inputs'
                    name='email'
                    value={email}
                    onChange={onInputChange}
                    required
                />
            </div>

            <div className='Employe-Create-Container'>

                <label className='Employe-Create-label'>Rol:</label>
                <select
                    className="Employe-Create-comboBox"
                    name="roll"
                    onChange={onInputChange}
                    required
                >
                    <option value="">Seleccione uno</option>
                    {rol.map((rl, i) => (
                        <option value={rl.id} key={i} >{rl.name}</option>
                    ))}
                </select>

                <label className='Employe-Create-label'>Sucursal:</label>
                <select
                    className="Employe-Create-comboBox"
                    name="branch"
                    onChange={onInputChange}
                    required
                >
                    <option value="">Seleccione uno</option>
                    {branchID.map((br, i) => (
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
                        accept="image/png, .jpeg, .jpg, image/gif"
                        name='image'
                        onChange={onInputChangeImage}
                        required
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
