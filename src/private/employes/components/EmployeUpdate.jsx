import { useMemo, useState } from 'react';
import { useGetBranchs, useGetEmploye, useGetRol } from '../hooks';
import employePhoto from '/assets/logos/employes_photo.svg';
import employeUpdate from '/assets/logos/employes_create.svg';
import './EmployeUpdate.css';
import { useForm } from '../../../hooks/useForm';

export const EmployeUpdate = ({ employeId }) => {

    // ComboBox Values
    const [rollList, setRollList] = useState();
    const [branchList, setBranchList] = useState()

    //ComboBox Match

    const [employeData, setemployeData] = useState({})
    const [formData, setformData] = useState({
        name: '',
        lastName: '',
        ci: '',
        birthDate: '',
        email: '',
        roll: '',
        branch: '',
        image: '',
    })

    const {
        onInputChange,
        onInputChangeImage,
        formState,
        name,
        lastName,
        ci,
        birthDate,
        email,
        roll,
    } = useForm(formData);

    useMemo(() => {
        setformData({
            name: employeData.first_name || "",
            lastName: employeData.last_name || "",
            ci: employeData.ci || "",
            birthDate: employeData.birth || "",
            email: employeData.email || "",
            roll: employeData.rol_id || "",
            branch: employeData.branch_user_id || "",
            image: employeData.image || "",
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
                    name="name"
                    value={name}
                    onChange={onInputChange}
                />

                <label className='Employe-Update-label' >Apellido:</label>
                <input
                    type="text"
                    className='Employe-Update-inputs'
                    name='lastName'
                    value={lastName}
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
                    name='birthDate'
                    value={birthDate}
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
                    name="roll"
                    onChange={onInputChange}
                    value={roll}
                >
                    {rollList?.map((rol)=>(
                            <option key={rol.id} value={rol.id}>{rol.name}</option>
                        ))
                    }

                </select>

                <label className='Employe-Update-label'>Sucursal:</label>
                <select name="selectBranch"
                    className="Employe-Update-comboBox"
                >
                    {/*                     <option>{branchs}</option>

                    {branch.filter(br => br.name_branch != branchs).map((br, i) => (
                        <option value={br.id} key={i}>{br.name_branch}</option>
                    ))}
 */}
                </select>

                <div className='Employe-Update-UploadPhoto'>
                    <img src={employePhoto} alt="employes" />
                    <h1>Subir foto de empleados</h1>
                    <span>Sube una foto para que puedas reconocer rapidamente a los miembros de tu equipo</span>
                    <div>
                        <input
                            className='Employe-Update-UploadPhoto-button'
                            type='file'
                            name='fotoUpload'
                            accept="image/png, .jpg, image/gif"
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
