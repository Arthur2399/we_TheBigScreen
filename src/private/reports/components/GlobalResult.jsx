import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler, } from 'chart.js';
import { useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
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

export const GlobalResult = ( {answerTotal} ) => {

    const labels = ["Pregunta 1", "Pregunta 2", "Pregunta 3", "Pregunta 4"];

    
    const options = {
        fill: true,
        response: true,
        scales: {
            y: {
                min: 0,
                max:5,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    }

    const data = useMemo(function () {
        return {
            datasets: [
                {
                    label: 'Puntuación:',
                    data: answerTotal,
                    tension: 0.3,
                    backgroundColor: "#21E1E1",
                
                },
            ],
            labels,
        };
    }, [answerTotal]);

    return (
        <div className="Global-result">
            <Bar data={data} options={options} />
        </div>
    )
}