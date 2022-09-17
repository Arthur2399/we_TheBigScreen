import employePhoto from '../../../assets/logos/employes_photo.svg';
import employeCreate from '../../../assets/logos/employes_create.svg';
import './EmployeForm.css';


export const EmployeForm = () => {
    return (
        <div className='Employe-Create'>

            <div className='Employe-Create-Container'>
                <label htmlFor="" className='Employe-Create-label'>Nombre:</label>
                <input type="text" className='Employe-Create-inputs' />

                <label htmlFor="" className='Employe-Create-label' >Apellido:</label>
                <input type="text" className='Employe-Create-inputs' />

                <label htmlFor="" className='Employe-Create-label'>CI:</label>
                <input type="text" className='Employe-Create-inputs' />


                <label htmlFor="" className='Employe-Create-label'>Fecha de nacimiento:</label>
                <input type="date" className='Employe-Create-inputs' />

                <label htmlFor="" className='Employe-Create-label'>Correo electrónico:</label>
                <input type="text" className='Employe-Create-inputs' />

            </div>

            <div className='Employe-Create-Container'>

                <label htmlFor="" className='Employe-Create-label'>Rol:</label>
                <select name="select" className="Employe-Create-comboBox">
                    <option value="value1" >Seleccione uno</option>
                    <option value="value2">Cajero</option>
                </select>

                <label htmlFor="" className='Employe-Create-label'>Sucursal:</label>
                <select name="select" className="Employe-Create-comboBox">
                    <option value="value1" >Seleccione uno</option>
                    <option value="value2">CCI</option>
                </select>

                <div className='Employe-Create-UploadPhoto'>
                    <img src={employePhoto} alt="employes" />
                    <h1>¿No tienes la foto?</h1>
                    <span>Tómale una foto con la web cam</span>
                    <div>
                        <button className='Employe-Create-UploadPhoto-button'>Subir foto</button>
                        <span> o </span>
                        <button className='Employe-Create-UploadPhoto-button'>Tomar foto</button>
                    </div>
                </div>

            </div>


            <div className='Employe-Create-Container'>
                <div className='Employe-Create-Sent'>
                    <img src={employeCreate} alt="employeCreate" />
                    <h1> Registrar empleado</h1>
                    <span>Ya estas a un paso de registrar al nuevo miembro de tu negocio</span>
                    <button className='Employe-Create-UploadPhoto-button button-sent'>Crear empleado</button>
                </div>

            </div>
        </div>
    )
}
