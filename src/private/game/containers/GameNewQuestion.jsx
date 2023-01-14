import './GameNewQuestion.css';

import surveyControl from '/assets/logos/survey-control.svg';
export const GameNewQuestion = () => {

    const onCloseWindow = () => {
    }

    return (
        <div className="new-question-info">
            <div className="new-question-options">
                <h2> ¿Nuevas preguntas?</h2>
                <p>Ingresa preguntas que hagan mas
                    divertido el juego
                </p>
                <div>
                    <button onClick={onCloseWindow} className="new-question-create-button">
                        Nueva pregunta
                    </button>
                </div>
            </div>
            <img src={surveyControl} alt="surveyControl" />
        </div>
    )
}
