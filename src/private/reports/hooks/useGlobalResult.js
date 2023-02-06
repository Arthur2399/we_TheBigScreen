import { useMemo } from 'react';

export const useGlobalResult = () => {
    const labels = ["Pregunta 1", "Pregunta 2", "Pregunta 3", "Pregunta 4"];
    const score =[1,4,2,6]

    const options = {
        fill: true,
        response: true,
        scales: {
            y: {
                min: 0,
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
                    data: score,
                    tension: 0.3,
                    backgroundColor: "#21E1E1",
                
                },
            ],
            labels,
        };
    }, []);

    return {
        data,
        options
    }
}
