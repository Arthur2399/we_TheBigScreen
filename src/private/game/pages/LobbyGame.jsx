import './LobbyGame.css';
import logotbs from '/assets/logos/tbs_logo.svg'
import qr from '/assets/logos/qr.svg'
import apple from '/assets/icons/Apple.svg'
import google from '/assets/icons/Google.png'
import { useEffect, useState } from 'react';

export const LobbyGame = () => {

    const [timer, setTimer] = useState("")

    useEffect(() => {
        function countdown(minutes, seconds) {
            var time = minutes * 60 + seconds;
            var interval = setInterval(function () {
                if (time == 0) {
                    setTimeout(function () {
                        console.log('termino...');
                    }, 10);
                    clearInterval(interval);
                    //HACER ALGO
                }
                var minutes = Math.floor(time / 60);
                if (minutes < 10) minutes = "0" + minutes;
                var seconds = time % 60;
                if (seconds < 10) seconds = "0" + seconds;
                var text = minutes + ':' + seconds;
                setTimer(text)
                time--;
            }, 1000);
        }
        countdown(3, 0);
    }, [])

    return (
        <section className="GameLobby">
            <img id="logo" src={logotbs} alt="" />
            <div className="GameLobby-container">
                <div className="GameLobby-container-qr">
                    <span>Escanea el codigo QR</span>
                    <div className=" GameLobby-qr-background">
                        <img src={qr} alt="" />
                    </div>
                    <h1>{timer}</h1>
                </div>
                <div className="GameLobby-container-player">
                    <h1>Jugadores</h1>
                    <div className="GameLobby-container-players">
                        <span>Arthur Chavez</span>
                        <span>Miguel Pino</span>
                        <span>Fausto Andino</span>
                    </div>
                </div>
            </div>
            <div className="GameLobby-footer">
                <h1>¿Aun no tienes la app oficial?</h1>
                <h2>Descargala gratis</h2>
                <h2>Buscala como The Big Screen</h2>
                <div className="GameLobby-footer-stores">
                    <img src={apple} alt="" />
                    <img src={google} alt="" />
                </div>
            </div>
        </section>
    )
}
