import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMqttGame } from '../hooks/usePostGame'
import logotbs from '/assets/logos/tbs_logo.svg'
import './TopPlayersGame.css'

export const TopPlayersGame = () => {

    const id = localStorage.getItem("roomId")
    const idQuestion = localStorage.getItem("questionID")
    const navigate = useNavigate()

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
                console.log(questions.length);
                console.log(questionsID);
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
    }, [])




    return (
        <>
            <section className="TopPlayers">
                <img id="logo" src={logotbs} alt="logo" />
                <div className="TopPlayers-container">

                    <div className="Winners-moment">
                        <div className="Winners-moment-left">
                            <div>
                                <span>1</span>
                            </div>
                            <span>Arthur Chavez</span>
                        </div>
                        <span>500 pts.</span>
                    </div>

                    <div className="Winners-moment">
                        <div className="Winners-moment-left">
                            <div>
                                <span>2</span>
                            </div>
                            <span>Miguel Pino</span>
                        </div>
                        <span>400 pts.</span>
                    </div>

                    <div className="Winners-moment">
                        <div className="Winners-moment-left">
                            <div>
                                <span>3</span>
                            </div>
                            <span>Fausto Andino</span>
                        </div>
                        <span>300 pts.</span>
                    </div>

                    <div className="Winners-moment">
                        <div className="Winners-moment-left">
                            <div>
                                <span>4</span>
                            </div>
                            <span>Steven Garrido</span>
                        </div>
                        <span>200 pts.</span>
                    </div>

                    <div className="Winners-moment">
                        <div className="Winners-moment-left">
                            <div>
                                <span>5</span>
                            </div>
                            <span>Marco Perez</span>
                        </div>
                        <span>100 pts.</span>
                    </div>
                </div>
            </section>
            <div className="TopPlayers-time">
                <span>{topPlayers}</span>
            </div>
        </>
    )
}
