import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, } from 'chart.js';
import { useReportsBranch } from '../hooks';
import { Line } from 'react-chartjs-2';
import './GreaterDemand.css';
import { useEffect, useState } from 'react';
import { useGetGreaterDemand } from '../hooks/useGetGreaterDemand';

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

    const [scoreGreaterDemand, setScoreGreaterDemand] = useState([5,4,5,3,5]);
    const [labels, setLabels] = useState(["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"]);

    useEffect(() => {
        /* const resp = useGetGreaterDemand(); */
    }, [])
    

    const { data, options } = useReportsBranch(scoreGreaterDemand,labels);
    return (
        <div className="GreaterDemand-report-container">
            <Line data={data} options={options} />
        </div>
    )
}
