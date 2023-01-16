import { API_IMAGE } from '../../../helper/routes';
import tbsLogo from '/assets/logos/tbs_logo.svg';
import './WinnerGame.css';
import { useEffect, useState } from 'react';

export const WinnerGame = () => {

    const [winner, setWinner] = useState([])

    useEffect(() => {
        const win = JSON.parse(localStorage.getItem("winner"));
        setWinner(win)
    }, [])
    

    
    return (
        <section class="gameWinner">
            <img id="logo" src={tbsLogo} alt="logo" />
            <div class="gameWinner-container">
                <h1>¡Felicitaciones ganador!</h1>
                <div>
                    <img src={`${API_IMAGE}${winner.room_player_image}`} alt="winner" />
                </div>
                <h1>{winner.room_player_full}</h1>
            </div>
        </section>
    )
}
