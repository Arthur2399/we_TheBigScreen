import { useMemo } from "react";


export const useReportsBranch = () => {

    const scores = [5, 6, 1, 3, 2, 6, 5, 4, 9, 8,];
    const labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

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
                    label: 'Mis datos',
                    data: scores,
                    tension: 0.3,
                    borderColor: "#21E1E1",
                    pointBackgroundColor: "#21E1E1",
                    backgroundColor: "rgba(75,192,192,0.3)",
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
