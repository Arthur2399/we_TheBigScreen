import './QuestionGame.css';
import logoTBS from '/assets/logos/tbs_logo.svg'
import cuadrado from '/assets/icons/cuadrado.png'
import triangulo from '/assets/icons/triangulo.png'
import circulo from '/assets/icons/circulo.png'
import rombo from '/assets/icons/rombo.png'
import { useEffect, useState } from 'react';

export const QuestionGame = () => {

    const [timer, setTimer] = useState(0);

    useEffect(() => {
        var totalTime = 20;
        const updateClock = () => {
            if (totalTime == 0) {
                alert("fin del tiempo")
            } else {
                totalTime -= 1;
                setTimeout(updateClock, 1000);
                setTimer(totalTime);
            }
        }

        updateClock();
    }, [])


    return (
        <>
            <section className="GameQuestion">
                <img id="logo" src={logoTBS} alt="logo" />
                <div className="GameQuestion-container">
                    <h1>¿Como se llamaba el barco el capitan Jack Sparrow?</h1>
                    <div className="GameQuestion-Answer">
                        <div className="Answer-container">
                            <div>
                                <img src={cuadrado} alt="cuadrado" />
                            </div>
                            <span>El perla negra</span>
                        </div>
                        <div className="Answer-container">
                            <div>
                                <img src={circulo} alt="circulo" />
                            </div>
                            <span>La niña</span>
                        </div>
                        <div className="Answer-container">
                            <div>
                                <img src={rombo} alt="rombo" />
                            </div>
                            <span>El interceptor</span>
                        </div>
                        <div className="Answer-container">
                            <div>
                                <img src={triangulo} alt="triangulo" />
                            </div>
                            <span>El Delorian</span>
                        </div>
                    </div>
                </div>
            </section>
            <div className="GameQuestion-time">
                <span>{timer}</span>
            </div>
        </>
    )
}
