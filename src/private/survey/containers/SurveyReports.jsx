import './SurveyReports';
import { Pie } from 'react-chartjs-2'
import { useReport } from '../hooks';
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js'

ChartJs.register(
    Tooltip,
    Title,
    ArcElement,
    Legend
);

export const SurveyReports = () => {
    const {data, options} = useReport();
    return (
        <div className='Survey-report-container'>
            <Pie data={data} options={options} />
        </div>
    )
}
