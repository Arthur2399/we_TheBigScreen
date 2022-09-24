import employePhoto from '/assets/logos/employes_photo.svg';
import employeCreate from '/assets/logos/employes_create.svg';
import { useState } from 'react';
import { useGetRol } from '../hooks/useGetRol';
import { useGetBranchs } from '../hooks/useGetBranchs';
import { useEffect } from 'react';
import './EmployeUpdate.css';
import { useGetEmploye } from '../hooks/usePutEmploye';


export const EmployeUpdate = ({employeId}) => {

    const [rol, setRol] = useState([])
    const [roles, setRoles] = useState('')
    const [branch, setBranch] = useState([])
    const [branchs, setBranchs] = useState('')

    //FORMULARIO
    const [firstName, setFirstName] = useState('')
    const [lastName,  setLastName]  = useState('')
    const [userName,  setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [branchID, setBranchID] = useState('')
    const [rolID, setRolId] = useState('')
    const [ci, setCi] = useState('')
    const [birth, setBirth] = useState('')
    const [image, setImage] = useState('')



/*     const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            console.log(fileReader);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    }; */

    const handleSubmit = async (event) => {
        event.preventDefault();
        //const image64 = await convertToBase64(event.target.elements.fotoUpload.file);
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
        }
        //const resp = await usePostEmploye(userData);
        console.log(userData);
    }


    useEffect(() => {
        async function fetchData() {
            const respR = await useGetRol();
            const respB = await useGetBranchs();
            const respEmploye = await useGetEmploye(employeId);
            //console.log(employeId);
            setRol(respR);
            setBranch(respB);

            setFirstName(respEmploye.first_name);
            setLastName(respEmploye.first_name);
            setUserName(respEmploye.username);
            setEmail(respEmploye.email);
            setBranchID(respEmploye.branch_user_id);
            setRolId(respEmploye.rol_id);
            setCi(respEmploye.ci);
            setBirth(respEmploye.birth);
            setImage(respEmploye.image);

            respR.forEach(r => {
                if(r.id == respEmploye.rol_id){
                    setRoles( r.name);
                }
            });

            respB.forEach(b => {
                if(b.id == respEmploye.branch_user_id){
                    setBranchs( b.name_branch);
                }
            });

        }
        fetchData();
    }, [employeId])


    return (
        <div className='Employe-Create'>

            <form onSubmit={handleSubmit} className="Employe-Form">

                <div className='Employe-Create-Container'>
                    <label htmlFor="" className='Employe-Create-label'>Nombre:</label>
                    <input type="text"
                            className='Employe-Create-inputs'
                            name='name'
                            value={firstName}
                            onChange={(event)=>setFirstName(event.target.value)}
                    />

                    <label htmlFor="" className='Employe-Create-label' >Apellido:</label>
                    <input type="text"
                        className='Employe-Create-inputs'
                        name='lastName'
                        value={lastName}
                        onChange={(event)=>setLastName(event.target.value)}
                    />

                    <label htmlFor="" className='Employe-Create-label'>CI:</label>
                    <input type="text"
                        className='Employe-Create-inputs'
                        name='ci'
                        value={ci}
                        onChange={(event)=>setCi(event.target.value)}
                    />

                    <label htmlFor="" className='Employe-Create-label'>Fecha de nacimiento:</label>
                    <input type="date"
                        className='Employe-Create-inputs'
                        name='dateBirth'
                        value={birth}
                        onChange={(event)=>setBirth(event.target.value)}
                    />

                    <label htmlFor="" className='Employe-Create-label'>Correo electrónico:</label>
                    <input type="text"
                        className='Employe-Create-inputs'
                        name='email'
                        value={email}
                        onChange={(event)=>setEmail(event.target.value)}
                    />
                </div>

                <div className='Employe-Create-Container'>

                    <label htmlFor="" className='Employe-Create-label'>Rol:</label>
                    <select name="selectRol" className="Employe-Create-comboBox">
                        <option >{roles}</option>
                        {rol.filter(rl=>rl.name!= roles).map((rl, i) => (
                            <option value={rl.id} key={i} >{rl.name}</option>
                        ))}
         
                    </select>

                    <label htmlFor="" className='Employe-Create-label'>Sucursal:</label>
                    <select name="selectBranch" className="Employe-Create-comboBox">
                    <option>{branchs}</option>

                        {branch.filter(br=>br.name_branch!= branchs).map((br, i) => (
                            <option value={br.id} key={i}>{br.name_branch}</option>
                        ))}
         
                    </select>

                    <div className='Employe-Create-UploadPhoto'>
                        <img src={employePhoto} alt="employes" />
                        <h1>¿No tienes la foto?</h1>
                        <span>Tómale una foto con la web cam</span>
                        <div>
                            <input
                                className='Employe-Create-UploadPhoto-button'
                                type='file'
                                name='fotoUpload'
                                accept="image/png, .jpeg, .jpg, image/gif"
                            />

                        </div>
                    </div>

                </div>

                <div className='Employe-Create-Container'>
                    <div className='Employe-Create-Sent'>
                        <img src={employeCreate} alt="employeCreate" />
                        <h1> Registrar empleado</h1>
                        <span>Ya estas a un paso de registrar al nuevo miembro de tu negocio</span>
                        <button className='Employe-Create-UploadPhoto-button button-sent' type='submit'>Crear empleado</button>
                    </div>
                </div>
            </form>

        </div>
    )
}
