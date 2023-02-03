import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler, } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useGlobalResult } from '../hooks';
import './GlobalResult.css';

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

export const GlobalResult = ( {dataGlobalResults}) => {
    const { data, options } = useGlobalResult( dataGlobalResults );
    return (
        <div className="Global-result">
            <Bar data={data} options={options} />
        </div>
    )
}