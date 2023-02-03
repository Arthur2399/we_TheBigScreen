import { useMemo } from 'react';

export const useGlobalResult = (dataGlobalResults) => {
    console.log("dataGlobalResults",dataGlobalResults)
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
                    data: dataGlobalResults,
                    tension: 0.3,
                    backgroundColor: "#21E1E1",
                
                },
            ],
            labels,
        };
    }, [dataGlobalResults]);

    return {
        data,
        options
    }
}
