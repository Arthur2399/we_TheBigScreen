import { useState, useEffect } from 'react';
import { Modal, MessageAlert } from '../../../components';
import { useModal } from '../../../hooks';
import { useGetBranchs, useGetEmploye, usePutEmploye, useGetRol } from '../hooks';
import { useDeleteEmploye } from '../hooks/useDeleteEmploye';
import employePhoto from '/assets/logos/employes_photo.svg';
import employeUpdate from '/assets/logos/employes_create.svg';
import './EmployeUpdate.css';


export const EmployeUpdate = ({ employeId }) => {

    const [isOpenModal, openModal, closeModal] = useModal(false);

    const [rol, setRol] = useState([])
    const [roles, setRoles] = useState('')
    const [branch, setBranch] = useState([])
    const [branchs, setBranchs] = useState('')

    //FORMULARIO
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [ci, setCi] = useState('')
    const [birth, setBirth] = useState('')
    const [image, setImage] = useState('')
    const [branchID, setBranchID] = useState('')
    const [rolID, setRolId] = useState('')
    const [imageChange, setImageChange] = useState(false)


    const [postImage, setPostImage] = useState('');

    const handleFileUpload = (foto) => {
        const reader = new FileReader()
        reader.readAsDataURL(foto);
        reader.onload = function () {
            const base64 = reader.result
            setPostImage(base64);
            setImage(base64);
            setImageChange(true);
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        const userData = {
            first_name: firstName,
            last_name: lastName,
            username: userName,
            email: email,
            branch_user_id: branchID,
            rol_id: rolID,
            ci: ci,
            birth: birth,
            image: image,
            image_change: imageChange,
        }
        const resp = await usePutEmploye(JSON.stringify(userData), employeId);
        console.log(userData)
    }

    const deleteEmploye = async (event) => {
        event.preventDefault();
        const dlt = await useDeleteEmploye(employeId)
    }

    useEffect(() => {
        async function fetchData() {
            const respR = await useGetRol();
            const respB = await useGetBranchs();
            const respEmploye = await useGetEmploye(employeId);

            setRol(respR);
            setBranch(respB);

            setFirstName(respEmploye.first_name);
            setLastName(respEmploye.last_name);
            setUserName(respEmploye.username);
            setEmail(respEmploye.email);
            setCi(respEmploye.ci);
            setBirth(respEmploye.birth);
            setImage(respEmploye.image);
            setImage(respEmploye.image_change);

            setBranchID(respEmploye.branch_user_id);
            setRolId(respEmploye.rol_id);

            respR.forEach(r => {
                if (r.id == respEmploye.rol_id) {
                    setRoles(r.name);
                }
            });
            respB.forEach(b => {
                if (b.id == respEmploye.branch_user_id) {
                    setBranchs(b.name_branch);
                }
            });
        }
        fetchData();
    }, [employeId])



    return (
        <form onSubmit={handleSubmit} className="Employe-Form">

            <div className='Employe-Update-Container'>
                <label htmlFor="" className='Employe-Update-label'>Nombre:</label>
                <input type="text"
                    className='Employe-Update-inputs'
                    name='name'
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                />

                <label htmlFor="" className='Employe-Update-label' >Apellido:</label>
                <input type="text"
                    className='Employe-Update-inputs'
                    name='lastName'
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                />

                <label htmlFor="" className='Employe-Update-label'>CI:</label>
                <input type="text"
                    className='Employe-Update-inputs'
                    name='ci'
                    value={ci}
                    onChange={(event) => setCi(event.target.value)}
                />

                <label htmlFor="" className='Employe-Update-label'>Fecha de nacimiento:</label>
                <input type="date"
                    className='Employe-Update-inputs'
                    name='dateBirth'
                    value={birth}
                    onChange={(event) => setBirth(event.target.value)}
                />

                <label htmlFor="" className='Employe-Update-label'>Correo electrónico:</label>
                <input type="text"
                    className='Employe-Update-inputs'
                    name='email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>

            <div className='Employe-Update-Container'>

                <label htmlFor="" className='Employe-Update-label'>Rol:</label>
                <select name="selectRol"
                    className="Employe-Update-comboBox"
                    onChange={(event) => setRolId(parseInt(event.target.value))}
                >
                    <option >{roles}</option>
                    {rol.filter(rl => rl.name != roles).map((rl, i) => (
                        <option value={rl.id} key={i} >{rl.name}</option>
                    ))}

                </select>

                <label htmlFor="" className='Employe-Update-label'>Sucursal:</label>
                <select name="selectBranch"
                    className="Employe-Update-comboBox"
                    onChange={(event) => setBranchID(parseInt(event.target.value))}
                >
                    <option>{branchs}</option>

                    {branch.filter(br => br.name_branch != branchs).map((br, i) => (
                        <option value={br.id} key={i}>{br.name_branch}</option>
                    ))}

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
                            onChange={(e) => handleFileUpload(e.target.files[0])}
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
                            onClick={openModal}>
                            Deshabilitar
                        </button>
                        <Modal isOpen={isOpenModal} closeModal={closeModal} title="Deshabilitar empleado" x={"300px"} y={"150px"}>
                            <MessageAlert funcion={deleteEmploye} messageButton='Eliminar' message='¿Deseas eliminar este empleado?' />
                        </Modal>
                        <button className=' button-sent' type='submit'>Actualizar</button>
                    </div>
                </div>
            </div>
        </form>
    )
}
