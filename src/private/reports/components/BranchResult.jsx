import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler, } from 'chart.js';
import { useBranchResult } from '../hooks';
import { Bar } from 'react-chartjs-2';
import './BranchResult.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
);

export const BranchResult = () => {
    const { data, options } = useBranchResult();
    return (
        <div className="Branch-result">
            <Bar data={data} options={options} />
        </div>
    )
}