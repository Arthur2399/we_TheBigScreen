import { QuestionManager, QuestionPublish, SurveyInfo,SurveyReports } from '../containers';
import './Surveys.css';

export const Surveys = () => {
    return (
        <section className="Survey">
            <div className="Survey-container">
                <h1 className="Survey-main-title">Encuesta de satisfaccion al cliente</h1>
                <div className="Survey-desing-container">
                    <div className="Survey-views-container">
                        <div className="Survey-publish-questions">
                            <h2>Preguntas publicadas</h2>
                            <QuestionPublish />
                        </div>
                        <div className="Survey-all-container">
                            <div className="Survey-response-range">
                                <h2>Alcance de respuestas</h2>
                                <SurveyReports />
                            </div>
                            <div className="Survey-manage-questions">
                                <h2>Administrar preguntas</h2>
                                <QuestionManager />
                            </div>
                        </div>
                    </div>
                    <SurveyInfo />
                </div>
            </div>
        </section>
    )
}
