import game from '/assets/logos/game.svg';
import arrow from '/assets/icons/left-arrow.svg';
import './GameInfo.css'

export const GameInfo = () => {
    return (
        <div className="Game-info-container">
            <img src={game} alt="popcorn" />
            <h1>The Big Screen</h1>
            <div className="Game-arrow-text">
                <img src={arrow} alt="arrow" />
                <p>Ingresa los nuevos estrenos para que
                    los usuarios lo puedan revisar en la
                    app oficial</p>
            </div>
        </div>
    )
}
