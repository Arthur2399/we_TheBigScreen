import surveymain from '/assets/logos/survey-main.svg';
import arrow from '/assets/icons/left-arrow.svg';
import './SurveyInfo.css';

export const SurveyInfo = () => {
    return (
        <div className="Survey-info-container">
            <img src={surveymain} alt="survey" className='animate__animated animate__bounce'/>
            <h1>The Big Screen</h1>
            <div className="arrow-text">
                <img src={arrow} alt="arrow" />
                <p>Conoce todas las estadísticas de las encuestas de satisfacción</p>
            </div>
        </div>
    )
}
