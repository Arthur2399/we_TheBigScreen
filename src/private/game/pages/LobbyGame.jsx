import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
import { API_IMAGE } from '../../../helper/routes';
import logotbs from '/assets/logos/tbs_logo.svg'
import apple from '/assets/icons/Apple.svg'
import google from '/assets/icons/Google.png'
import sound from '/assets/music/Ticklish.mp3'
import { useGetUsers } from '../hooks/useGetUsers';
import { useMqttGame } from '../hooks/usePostGame';
import './LobbyGame.css';
import { useGetQuestions } from '../hooks/useGetQuestion';

export const LobbyGame = () => {

    const [timer, setTimer] = useState("03:00");
    const [roomData, setRoomData] = useState({})
    const [users, setUsers] = useState([])
    const [animateContainer, setanimateContainer] = useState("animate__tada");
    const location = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();

    const onNavigateQuestion = () => {
        navigate("question/1");
    }

    useEffect(() => {
        window.localStorage.setItem("roomId", id)
        const room = JSON.parse(localStorage.getItem("room"));
        setRoomData(room)
        const mqttGame = async () => {
            const resp = await useMqttGame("StartGame", room.room_number)
        }
        const fetchData = async () => {
            const respQuestion = await useGetQuestions(room.room_number)
            window.localStorage.setItem("question", JSON.stringify(respQuestion.resp));
            window.localStorage.setItem("questionID", 0);
        }
        fetchData();
        if (!location.pathname.includes("question")) {
            function countdown(minutes, seconds) {
                var time = minutes * 60 + seconds;
                var interval = setInterval(function () {
                    if (time == 0) {
                        setTimeout(function () {
                            mqttGame();
                            onNavigateQuestion()
                        }, 10);
                        clearInterval(interval);
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
            countdown(3,0);

            var totalTime = 5;
            const updateClock = () => {
                if (totalTime == 0) {
                    totalTime = 5
                    setTimeout(updateClock, 1000);
                    setanimateContainer("animate__tada")
                } else {
                    setanimateContainer("")
                    totalTime -= 1;
                    setTimeout(updateClock, 1000);
                }
            }
            updateClock();
        }
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            if (!location.pathname.includes("question")) {
                const resp = await useGetUsers(roomData.room_number)
                setUsers(resp.resp);
            }
        }
        fetchData();
    }, [animateContainer])


    return (
        <>
            {location.pathname.includes("question") || location.pathname.includes("topPlayers") || location.pathname.includes("winner")
                ? <Outlet />
                : <section className="GameLobby">
                    <img id="logo" src={logotbs} alt="" />
                    <div className="GameLobby-container">
                        <div className="GameLobby-container-qr">
                            <span>Escanea el codigo QR</span>
                            <div className=" GameLobby-qr-background animate__animated animate__pulse">
                                <img src={`${API_IMAGE}${roomData.room_qr}`} alt="qr" />
                            </div>
                            <h1 className='animate__animated animate__flash'>{roomData.room_number}</h1>
                        </div>
                        <div className={`GameLobby-container-player animate__animated ${animateContainer}`}>
                            <h1>Jugadores</h1>
                            <div className="GameLobby-container-players">
                                {users.map((user) => (
                                    <span key={user.room_player_full}>{user.room_player_full}</span>
                                ))
                                }
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
                    <ReactAudioPlayer
                        src={sound}
                        autoPlay
                    /* controls */
                    />

                </section>

            }
            {location.pathname.includes("question") || location.pathname.includes("topPlayers") || location.pathname.includes("winner")
                ? <></>
                : <div className="GameQuestion-time timeLobby">
                    <span>{timer}</span>
                </div>
            }

        </>
    )
}
