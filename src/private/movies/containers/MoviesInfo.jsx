import tickets from '/assets/logos/ticket.svg';
import arrow from '/assets/icons/left-arrow.svg';
import './MoviesInfo.css';

export const MoviesInfo = () => {
    return (
        <div className="Movies-info-container">
            <img src={tickets} alt="popcorn" />
            <h1>The Big Screen</h1>
            <div className="Movies-arrow-text">
                <img src={arrow} alt="arrow" />
                <p>Ingresa los nuevos estrenos para que
                    los usuarios lo puedan revisar en la
                    app oficial</p>
            </div>
        </div>
    )
}
