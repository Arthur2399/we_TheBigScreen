import './TopPlayersGame.css'
import logotbs from '/assets/logos/tbs_logo.svg'

export const TopPlayersGame = () => {
    return (
        <>
            <section className="TopPlayers">
                <img id="logo" src={logotbs} alt="logo"/>
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
                <span id="timer"></span>
            </div>
        </>
    )
}
