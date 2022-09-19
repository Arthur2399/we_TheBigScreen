import './AwardsForm.css';

export const AwardsForm = () => {
    return (
        <div className='Awards-Create'>

            <div className='Awards-Create-Container'>
                <label htmlFor="" className='Awards-Create-label'>Nombre:</label>
                <input type="text" className='Awards-Create-inputs' />

                <label htmlFor="" className='Awards-Create-label' >Puntos:</label>
                <input type="number" className='Awards-Create-inputs' />

                <label htmlFor="" className='Awards-Create-label'>Fecha de publicación:</label>
                <input type="date" className='Awards-Create-inputs' />


                <label htmlFor="" className='Awards-Create-label'>Fecha de salida:</label>
                <input type="date" className='Awards-Create-inputs' />

               
                <label htmlFor="" className='Awards-Create-label'>Foto:</label>
                <div className='Awards-Create-UploadPhoto'>
                    <button>Subir</button>
                    <span>Suba una portada...</span>
                </div>

            </div>


            <div className='Awards-Create-Container'>

     


            </div>


            <div className='Awards-Create-Container'>
                <div className='Awards-Create-Sent'>
                    <img src={''} alt="AwardsCreate" />
                    <h1> Registrar empleado</h1>
                    <span>Ya estas a un paso de registrar al nuevo miembro de tu negocio</span>
                    <button className='Awards-Create-UploadPhoto-button button-sent'>Crear empleado</button>
                </div>

            </div>
        </div>

    )
}
