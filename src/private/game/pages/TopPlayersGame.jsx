import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMqttGame } from '../hooks/usePostGame'
import logotbs from '/assets/logos/tbs_logo.svg'
import './TopPlayersGame.css'
import { useGetTopPlayers } from '../hooks/useGetTopPlayers'
import ReactAudioPlayer from 'react-audio-player'
import soundPlayer from '/assets/music/wiiTop.mp3'
export const TopPlayersGame = () => {

    const id = localStorage.getItem("roomId")
    const idQuestion = localStorage.getItem("questionID")
    const navigate = useNavigate()

    const [topPlayersGame, setTopPlayersGames] = useState([])

    const [topPlayers, setTopPlayers] = useState("5")

    const onNextQuestion = () => {
        navigate(`/game/room/${id}/question/${idQuestion}`)
    }

    const onWinnerGame = () => {
        navigate(`/game/room/${id}/winner`)
    }

    useEffect(() => {
        window.localStorage.setItem("roomId", id)
        const room = JSON.parse(localStorage.getItem("room"));
        const questions = JSON.parse(localStorage.getItem("question"))
        const questionsID = parseInt(localStorage.getItem("questionID"))

        const mqttGameNextQuestion = async () => {
            const resp = await useMqttGame("NextQuestion", room.room_number)
        }

        const mqttGameEndGame = async () => {
            const resp = await useMqttGame("EndGame", room.room_number)
        }



        var totalTime = 10;
        const updateClock = () => {
            if (totalTime == 0) {
                if (questionsID < questions.length) {
                    mqttGameNextQuestion()
                    onNextQuestion();
                } else {
                    mqttGameEndGame();
                    onWinnerGame();

                }
            } else {
                totalTime -= 1;
                setTimeout(updateClock, 1000);
                setTopPlayers(totalTime);
            }
        }
        updateClock();

        const fetchData = async () => {
            const resp = await useGetTopPlayers(room.room_number);
            setTopPlayersGames(resp.resp);
        }

        fetchData();

    }, [])


    return (
        <>
            <section className="TopPlayers">
                <img id="logo" src={logotbs} alt="logo" />
                <div className="TopPlayers-container">

                    {
                        topPlayersGame.map((top, index) => (
                            <div className="Winners-moment">
                                <div className="Winners-moment-left">
                                    <div>
                                        <span>{index + 1}</span>
                                    </div>
                                    <span>{top.room_player_full}</span>
                                </div>
                                <span>{top.room_player_score} pts.</span>
                            </div>
                        ))
                    }
                    <ReactAudioPlayer
                        src={soundPlayer}
                        autoPlay
                    /* controls */
                    />
                </div>
            </section>
            <div className="TopPlayers-time">
                <span>{topPlayers}</span>
            </div>
        </>
    )
}
