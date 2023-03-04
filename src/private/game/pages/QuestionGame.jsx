import './QuestionGame.css';
import logoTBS from '/assets/logos/tbs_logo.svg'
import cuadrado from '/assets/icons/cuadrado.png'
import triangulo from '/assets/icons/triangulo.png'
import circulo from '/assets/icons/circulo.png'
import rombo from '/assets/icons/rombo.png'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMqttGame } from '../hooks/usePostGame';
import ReactAudioPlayer from 'react-audio-player';
import wiiSound from '/assets/music/wii.mp3'

export const QuestionGame = () => {

    const [timerQuestion, setTimerQuestion] = useState(0);
    const id = localStorage.getItem("roomId")

    const questionsID = parseInt(localStorage.getItem("questionID"))
    const questions = JSON.parse(localStorage.getItem("question"))
    const question = questions[questionsID]

    const [validQuestion, setValidQuestion] = useState(false);

    const navigate = useNavigate();

    const onPlayersTop = () => {
        navigate(`/game/room/${id}/topPlayers`)
    }

    useEffect(() => {
        window.localStorage.setItem("roomId", id)
        const room = JSON.parse(localStorage.getItem("room"));
        const mqttGame = async () => {
            const resp = await useMqttGame("EndQuestion", room.room_number)
        }
        var totalTime = 10;
        const updateClock = () => {
            if (totalTime <= 0) {
                setValidQuestion(true);
                if (totalTime == -4) {
                    window.localStorage.setItem("questionID", questionsID + 1);
                    mqttGame();
                    onPlayersTop();
                } else {
                    totalTime -= 1;
                    setTimeout(updateClock, 1000);
                    setTimerQuestion(totalTime);
                }
            } else {
                totalTime -= 1;
                setTimeout(updateClock, 1000);
                setTimerQuestion(totalTime);
            }
        }
        updateClock();
    }, [])

    return (
        <>
            <section className="GameQuestion">
                <img id="logo" src={logoTBS} alt="logo" />
                <div className="GameQuestion-container">
                    <h1>{question.question_question}</h1>

                    {
                        validQuestion === false
                            ? <div className="GameQuestion-Answer">
                                <div className="Answer-container">
                                    <div>
                                        <img src={cuadrado} alt="cuadrado" />
                                    </div>
                                    <span>{question.options[0].options_answer}</span>
                                </div>
                                <div className="Answer-container">
                                    <div>
                                        <img src={circulo} alt="circulo" />
                                    </div>
                                    <span>{question.options[1].options_answer}</span>
                                </div>
                                <div className="Answer-container">
                                    <div>
                                        <img src={rombo} alt="rombo" />
                                    </div>
                                    <span>{question.options[2].options_answer}</span>
                                </div>
                                <div className="Answer-container">
                                    <div>
                                        <img src={triangulo} alt="triangulo" />
                                    </div>
                                    <span>{question.options[3].options_answer}</span>
                                </div>
                            </div>
                            : <div className="GameQuestion-Answer">
                                <div className={question.options[0].options_correct == true ? "Answer-container valid-question" : "Answer-container"}>
                                    <div>
                                        <img src={cuadrado} alt="cuadrado" />
                                    </div>
                                    <span>{question.options[0].options_answer}</span>
                                </div>
                                <div className={question.options[1].options_correct == true ? "Answer-container valid-question" : "Answer-container"}>
                                    <div>
                                        <img src={circulo} alt="circulo" />
                                    </div>
                                    <span>{question.options[1].options_answer}</span>
                                </div>
                                <div className={question.options[2].options_correct == true ? "Answer-container valid-question" : "Answer-container"}>
                                    <div>
                                        <img src={rombo} alt="rombo" />
                                    </div>
                                    <span>{question.options[2].options_answer}</span>
                                </div>
                                <div className={question.options[3].options_correct == true ? "Answer-container valid-question" : "Answer-container"}>
                                    <div>
                                        <img src={triangulo} alt="triangulo" />
                                    </div>
                                    <span>{question.options[3].options_answer}</span>
                                </div>
                            </div>
                    }
                </div>
                <ReactAudioPlayer
                    src={wiiSound}
                    autoPlay
                /* controls */
                />
            </section>
            {location.pathname.includes("topPlayers")
                ? <></>
                : <div className="GameQuestion-time">
                    <span>{timerQuestion >= 0 ? timerQuestion : 0}</span>
                </div>}
        </>
    )
}
