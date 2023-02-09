import { useMemo, useState } from 'react';
import { BranchResult, GlobalResult } from '../components';
import { AnswerReport, Filters, Questions, ReportsInfo } from '../containers';
import { useGetReportData } from '../hooks/useGetReportData';
import './Reports.css';

export const Reports = () => {

    const [dataFilter, setDataFilter] = useState({})
    const [respReport, setRespReport] = useState({})


    useMemo(async () => {
        if (dataFilter.template_id && dataFilter.branch_id) {
            const { reportData, statusReportData } = await useGetReportData(JSON.stringify(dataFilter))
            if (statusReportData === 200) {
                setRespReport(reportData.result)
            }
        }
    }, [dataFilter])


    return (
        <section className="Reports">
            <div className="Reports-container">
                <h1 className="Reports-main-title">Reportes de las encuentas</h1>
                <div className="Reports-desing-container">
                    <div className="Reports-views-container">
                        <div className="Reports-publish-questions">
                            <h2>Resultado Global</h2>
                            <GlobalResult answerTotal={respReport.answerTotal} />
                            <br />
                            <h2>Resultado en {respReport.name}</h2>
                            <BranchResult answerBranch={respReport.answerBranch} />
                        </div>
                        <div className="Reports-all-container">
                            <div className="Reports-filter">
                                <h2>Filtros</h2>
                                <Filters setDataFilter={setDataFilter} />
                            </div>
                            <div className="Reports-questions">
                                <h2>Preguntas</h2>
                                <Questions questions={respReport.questions} />
                            </div>
                            <div className="Reports-answers-report">
                                <h2>Alcance de respuestas en {respReport.name}</h2>
                                <span> <b>Total de usuarios:</b>  {respReport.userTot}</span>
                                <AnswerReport reach={respReport.reach} />
                            </div>
                        </div>
                    </div>
                    <ReportsInfo />
                </div>
            </div>
        </section>
    )
}
