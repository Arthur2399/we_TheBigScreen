import { useMemo } from 'react';

export const useGlobalResult = () => {

    const scores = [5, 4, 5, 3,];
    const labels = ["Pregunta 1", "Pregunta 2", "Pregunta 3", "Pregunta 4"];

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
                    data: scores,
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
