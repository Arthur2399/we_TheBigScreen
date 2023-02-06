import { useState } from 'react';
import { useEffect } from 'react';
import { BranchResult, GlobalResult } from '../components';
import { AnswerReport, Filters, Questions, ReportsInfo } from '../containers';
import { useGetReportData } from '../hooks/useGetReportData';
import './Reports.css';

export const Reports = () => {

    const [dataFilter, setDataFilter] = useState({})
    const [respReport, setRespReport] = useState([])


    console.log(dataFilter)

    useEffect(() => {
        const fetchData = async () => {
            const { data, num } = await useGetReportData(JSON.stringify(dataFilter));
            if (num == 200) {
                setRespReport(data.result.answerTotal)
            } else {
                /* setRespReport([]) */
            }
        }
        fetchData();
    }, [dataFilter])



    return (
        <section className="Reports">
            <div className="Reports-container">
                <h1 className="Reports-main-title">Reportes de las encuentas</h1>
                <div className="Reports-desing-container">
                    <div className="Reports-views-container">
                        <div className="Reports-publish-questions">
                            <h2>Resultado Global</h2>
                            <GlobalResult/>
                            <br />
                            <h2>Resultado en CCI</h2>
                            <BranchResult />
                        </div>
                        <div className="Reports-all-container">
                            <div className="Reports-filter">
                                <h2>Filtros</h2>
                                <Filters setDataFilter={setDataFilter} />
                            </div>
                            <div className="Reports-questions">
                                <h2>Preguntas</h2>
                                <Questions />
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
