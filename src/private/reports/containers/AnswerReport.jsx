import { Pie } from 'react-chartjs-2'
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js'
import { useAnswerReport } from '../hooks/index';
import'./AnswerReport.css';

ChartJs.register(
    Tooltip,
    Title,
    ArcElement,
    Legend
);

export const AnswerReport = () => {
    const {data, options} =  useAnswerReport();
    return (
        <div className='Report-container'>
            <Pie data={data} options={options} />
        </div>
    )
}
