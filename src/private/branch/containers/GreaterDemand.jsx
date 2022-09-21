import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, } from 'chart.js';
import { useReportsBranch } from '../hooks';
import { Line } from 'react-chartjs-2';
import './GreaterDemand.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
);

export const GreaterDemand = () => {
    const { data, options } = useReportsBranch();
    return (
        <div className="GreaterDemand-report-container">
            <Line data={data} options={options} />
        </div>
    )
}
