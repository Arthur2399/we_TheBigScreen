import './LobbyGame.css';
import logotbs from '/assets/logos/tbs_logo.svg'
import qr from '/assets/logos/qr.svg'
import apple from '/assets/icons/Apple.svg'
import google from '/assets/icons/Google.png'

export const LobbyGame = () => {
  return (
    <section className="GameLobby">
        <img id="logo" src={logotbs} alt=""/>
        <div className="GameLobby-container">
            <div className="GameLobby-container-qr">
                <span>Escanea el codigo QR</span>
                <div className=" GameLobby-qr-background">
                    <img src={qr} alt=""/>
                </div>
                <h1>3:00</h1>
            </div>
            <div className="GameLobby-container-player">
                <h1>Jugadores</h1>
                <div className="GameLobby-container-players">
                    <span>Arthur Chavez</span>
                    <span>Miguel Pino</span>
                    <span>Ruben Salas</span>
                    <span>Efrain Raza</span>
                    <span>Fausto Andino</span>
                    <span>Marco Perez</span>
                    <span>Sofia Ruales</span>
                    <span>Mateo Lopez</span>
                    <span>Julian Tapia</span>
                    <span>Josua Santana</span>
                    <span>Paul Blacio</span>
                    <span>Milton Garrido</span>
                    <span>Luis Tapia</span>
                    <span>Maria Pino</span>
                    <span>Jessenia Raza</span>
                    <span>Valeria Chavez</span>
                    <span>Kathy Andrade</span>
                    <span>Simon Bolivar</span>
                    <span>Alex Calderon</span>
                    <span>Arthur Chavez</span>
                    <span>Miguel Pino</span>
                    <span>Ruben Salas</span>
                    <span>Efrain Raza</span>
                    <span>Fausto Andino</span>
                    <span>Marco Perez</span>
                    <span>Sofia Ruales</span>
                    <span>Mateo Lopez</span>
                    <span>Julian Tapia</span>
                    <span>Josua Santana</span>
                    <span>Paul Blacio</span>
                    <span>Milton Garrido</span>
                    <span>Luis Tapia</span>
                    <span>Maria Pino</span>
                    <span>Jessenia Raza</span>
                    <span>Valeria Chavez</span>
                    <span>Kathy Andrade</span>
                    <span>Simon Bolivar</span>
                    <span>Alex Calderon</span>
                </div>
            </div>
        </div>
        <div className="GameLobby-footer">
            <h1>¿Aun no tienes la app oficial?</h1>
            <h2>Descargala gratis</h2>
            <h2>Buscala como The Big Screen</h2>
            <div className="GameLobby-footer-stores">
                <img src={apple} alt=""/>
                <img src={google} alt=""/>
            </div>
        </div>
    </section>
  )
}
