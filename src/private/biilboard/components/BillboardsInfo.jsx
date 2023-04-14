import arrow from '/assets/icons/left-arrow.svg';
import billboard from '/assets/icons/billboard.png'

export const BillboardsInfo = () => {
    return (
        <div className="Movies-info-container">
            <img src={billboard} alt="popcorn" className='animate__animated animate__bounce' />
            <h1>The Big Screen</h1>
            <div className="Movies-arrow-text">
                <img src={arrow} alt="arrow" />
                <p>Ingresa las funciones de los exitos de tu cine, esto controla las funciones del juego</p>
            </div>
        </div>
    )
}
