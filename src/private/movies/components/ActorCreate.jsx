import './ActorCreate.css'

export const ActorCreate = () => {
    return (
        <div className='Actor-Create'>
            <label htmlFor="" className='Actor-Create-label'>Nombre:</label>
            <input type="text" className='Actor-Create-inputs' />
            <label htmlFor="" className='Actor-Create-label'>Foto:</label>
            <div className='Actor-Create-UploadPhoto'>
                <button className='Actor-Create-button'>Subir</button>
                <span>Suba una foto...</span>
            </div>
            <button className='Actor-Create-button Actor-summit'>Crear</button>
        </div>
    )
}
