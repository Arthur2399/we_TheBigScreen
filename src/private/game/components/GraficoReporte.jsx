import { Pie } from 'react-chartjs-2'
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js'

ChartJs.register(
    Tooltip,
    Title,
    ArcElement,
    Legend
);

export const GraficoReporte = () => {
        const data = {
            datasets: [{
                data: [10, 20],
                backgroundColor: [
                    '#A5C9CA',
                    '#21E1E1',
                ]
            },
            ],
            labels:[
                'Jugaron',
                'No Jugaron'
            ]
        };
        
        const options= {
            response:true,
            plugins:{
                legend: {
                    display:true,
                    position:'left'
                },
            }
          }

    return (
        <div className='Report-container'>
            <Pie data={data} options={options} />
        </div>
    )
}
