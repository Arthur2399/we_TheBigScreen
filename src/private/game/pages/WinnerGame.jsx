import { API_IMAGE } from '../../../helper/routes';
import tbsLogo from '/assets/logos/tbs_logo.svg';
import './WinnerGame.css';
import { useEffect, useState } from 'react';
import { useGetWinner } from '../hooks/useGetWinner';
import ReactAudioPlayer from 'react-audio-player';
import soundWinner from '/assets/music/winner.mp3'
export const WinnerGame = () => {

    const [winner, setWinner] = useState([])

    useEffect(() => {

        const getWinner = async () => {
            const room = JSON.parse(localStorage.getItem("room"));
            const resp = await useGetWinner(room.room_number);
            setWinner(resp.resp)
        }

        getWinner();

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
            <ReactAudioPlayer
                src={soundWinner}
                autoPlay
            /* controls */
            />
        </section>
    )
}
