import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { GameInfo } from '../containers/GameInfo';
import { GameNewQuestion } from '../containers/GameNewQuestion';
import { PlayGame } from '../containers/PlayGame';
import './StartGame.css';

export const StartGame = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const onNavigateRoom = () => {
        navigate('room')
    }

    return (
        <>
            {location.pathname === "/game/room"
                ? <Outlet />
                : <section className="Game">
                    <div className="Game-container">
                        <h1 className="Game-title">Juego de preguntas</h1>
                        <div className="Game-desing-container">
                            <div className="Game-view-container">
                                <div className="Game-first-container">

                                    <div className="Game-questions">
                                        <h1>Lista de preguntas</h1>
                                        <div className="Game-scroll-container">

                                        </div>
                                    </div>
                                    <div className="Game-play">
                                        <h1>Jugar trivia</h1>
                                        <PlayGame onNavigateRoom={onNavigateRoom} />
                                    </div>
                                </div>

                                <div className="Game-all-container">
                                    <div className="Game-staditics">
                                        <h1>Alcance de jugadores</h1>

                                    </div>
                                    <div className="Game-new-question">
                                        <h1>Administrar preguntas</h1>
                                        <GameNewQuestion />
                                    </div>
                                </div>
                            </div>
                            <GameInfo />
                        </div>
                    </div>
                </section>
            }

        </>
    )
}
