import { AnswerReport } from '../containers/AnswerReport';
import { Filters } from '../containers/Filters';
import { Questions } from '../containers/Questions';
import { ReportsInfo } from '../containers/ReportsInfo';
import './Reports.css';

export const Reports = () => {
    return (
        <section className="Reports">
            <div className="Reports-container">
                <h1 className="Reports-main-title">Reportes de las encuentas</h1>
                <div className="Reports-desing-container">
                    <div className="Reports-views-container">
                        <div className="Reports-publish-questions">
                            <h2>Resultado Global</h2>
                            <h2>Resultado en CCI</h2>
                        </div>
                        <div className="Reports-all-container">
                            <div className="Reports-filter">
                                <h2>Filtros</h2>
                                <Filters/>
                            </div>
                            <div className="Reports-questions">
                                <h2>Preguntas</h2>
                                <Questions/>
                            </div>
                            <div className="Reports-answers-report">
                                <h2>Alcance de respuestas en CCI</h2>
                                <AnswerReport />
                            </div>
                        </div>
                    </div>
                    <ReportsInfo />
                </div>
            </div>
        </section>
    )
}
