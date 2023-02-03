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

    const [scoreGreaterDemand, setScoreGreaterDemand] = useState([]);
    const [labels, setLabels] = useState([]);


    useEffect(() => {
        const fecthData = async() => {
            const resp = await useGetGreaterDemand();
            setLabels(resp[0])
            setScoreGreaterDemand(resp[1])
        }

         fecthData();
    }, [])

    
    
    const { data, options } = useReportsBranch(scoreGreaterDemand,labels);

    return (
        <div className="GreaterDemand-report-container">
            <Line data={data} options={options} />
        </div>
    )
}
