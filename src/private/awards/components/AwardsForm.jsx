import information from '../../../assets/logos/information.svg';
import gift from '../../../assets/logos/gift.svg'
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
                <div className='Awards-Create-Sent'>
                    <img src={information} alt="AwardsCreate" />
                    <h1> PUNTO DE INFORMACIÓN</h1>
                    <span>Al crear un nuevo premio, los usuarios lo podrán
                        visualizar en el rango de tiempo que esta especificado,
                        dentro de la aplicación oficial, para reclamar su premio
                        mostraran su código QR que debes escanear en el
                        modulo de "canjear creditos" y podrás debitar sus
                        puntos obtenidos.</span>
                </div>
            </div>


            <div className='Awards-Create-Container'>
                <div className='Awards-Create-Sent'>
                    <img src={gift} alt="AwardsCreate" />
                    <h1> Registrar premio</h1>
                    <span>Ya estas a un paso de registrar la recompesa para tus clientes</span>
                    <button className='Awards-Create-UploadPhoto-button button-sent'>Crear premio</button>
                </div>

            </div>
        </div>

    )
}
