import { useMemo, useState } from 'react';
import { useForm } from '../../../hooks/useForm';
import { useGetBranchs, useGetEmploye, useGetRol, usePutEmploye } from '../hooks';
import employePhoto from '/assets/logos/employes_photo.svg';
import employeUpdate from '/assets/logos/employes_create.svg';
import './EmployeUpdate.css';
import Swal from 'sweetalert2';

export const EmployeUpdate = ({ employeId, closeModal,setIsReload }) => {

    const [rollList, setRollList] = useState();
    const [branchList, setBranchList] = useState()
    const [employeData, setemployeData] = useState({})
    const [formData, setformData] = useState({
        first_name: '',
        last_name: '',
        ci: '',
        birth: '',
        username: '',
        email: '',
        rol_id: '',
        branch_user_id: '',
        image: '',
    })

    const {
        onInputChange,
        onInputChangeImage,
        formState,
        first_name,
        last_name,
        ci,
        username,
        birth,
        email,
        rol_id,
        branch_user_id,
        image,
    } = useForm(formData);

    useMemo(() => {
        setformData({
            first_name: employeData.first_name || "",
            last_name: employeData.last_name || "",
            ci: employeData.ci || "",
            birth: employeData.birth || "",
            username: employeData.username || "",
            email: employeData.email || "",
            rol_id: employeData.rol_id || "",
            branch_user_id: employeData.branch_user_id || "",
            image_change: employeData.image_change || false,
            image: "",
        })
    }, [employeData])


    useMemo(async () => {
        if (employeId > 0) {
            const rollResponse = await useGetRol();
            setRollList(rollResponse);
            const branchResponse = await useGetBranchs();
            setBranchList(branchResponse);
            const respEmploye = await useGetEmploye(employeId);
            setemployeData(respEmploye)
        }
    }, [employeId])


    const onUpdateEmploye = async (event) => {
        event.preventDefault()
        const des_answer = await Swal.fire({
            title: '¿Seguro que deseas actualizar este empleado?',
            showCancelButton: true,
            confirmButtonText: 'Actualizar',
            confirmButtonColor: "#FD5D5D"
        })

        if (des_answer.isConfirmed) {
            const { resp, response } = await usePutEmploye(JSON.stringify(formState), employeId);
            if (response.status == 200) {
                closeModal();
                Swal.fire({
                    icon: 'success',
                    title: 'Empleado actualizado',
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

    const disableEmploye = async () => {

    }


    return (
        <form onSubmit={onUpdateEmploye} className="Employe-Form">

            <div className='Employe-Update-Container'>
                <label className='Employe-Update-label'>Nombre:</label>
                <input
                    type="text"
                    className='Employe-Update-inputs'
                    name="first_name"
                    value={first_name}
                    onChange={onInputChange}
                />

                <label className='Employe-Update-label' >Apellido:</label>
                <input
                    type="text"
                    className='Employe-Update-inputs'
                    name='last_name'
                    value={last_name}
                    onChange={onInputChange}
                />

                <label className='Employe-Update-label'>CI:</label>
                <input
                    type="text"
                    className='Employe-Update-inputs'
                    name='ci'
                    value={ci}
                    onChange={onInputChange}
                />

                <label className='Employe-Update-label'>Fecha de nacimiento:</label>
                <input
                    type="date"
                    className='Employe-Update-inputs'
                    name='birth'
                    value={birth}
                    onChange={onInputChange}
                />

                <label className='Employe-Update-label'>Correo electrónico:</label>
                <input type="text"
                    className='Employe-Update-inputs'
                    name='email'
                    value={email}
                    onChange={onInputChange}
                />
            </div>

            <div className='Employe-Update-Container'>

                <label className='Employe-Update-label'>Rol:</label>
                <select
                    className="Employe-Update-comboBox"
                    name="rol_id"
                    onChange={onInputChange}
                    value={rol_id}
                >
                    {rollList?.map((rol) => (
                        <option key={rol.id} value={rol.id}>{rol.name}</option>
                    ))
                    }

                </select>

                <label className='Employe-Update-label'>Sucursal:</label>
                <select
                    className="Employe-Update-comboBox"
                    name="branch_user_id"
                    onChange={onInputChange}
                    value={branch_user_id}
                >
                    {
                        branchList?.map((branch) => (
                            <option key={branch.id} value={branch.id}>{branch.name_branch}</option>
                        ))
                    }

                </select>

                <div className='Employe-Update-UploadPhoto'>
                    <img src={employePhoto} alt="employes" />
                    <h1>Subir foto de empleados</h1>
                    <span>Sube una foto para que puedas reconocer rapidamente a los miembros de tu equipo</span>
                    <div>
                        <input
                            type='file'
                            className='Employe-Update-UploadPhoto-button'
                            accept="image/png, .jpg, image/gif"
                            name='image'
                            onChange={onInputChangeImage}
                        />
                    </div>
                </div>
            </div>

            <div className='Employe-Update-Container'>
                <div className='Employe-Update-Sent'>
                    <img src={employeUpdate} alt="employeUpdate" />
                    <h1> Actualizar empleado</h1>
                    <span>Actualiza los datos de los miembros de tu equipo</span>
                    <div className='optiones-Update-employe'>
                        <button className='button-sent'
                            onClick={disableEmploye}>
                            Deshabilitar
                        </button>
                        <button className=' button-sent' type='submit'>Actualizar</button>
                    </div>
                </div>
            </div>
        </form>
    )
}
