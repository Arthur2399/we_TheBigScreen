import { Pie } from 'react-chartjs-2'
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js'
import'./AnswerReport.css';

ChartJs.register(
    Tooltip,
    Title,
    ArcElement,
    Legend
);

export const AnswerReport = ({reach}) => {
    
    const data = {
        datasets: [{
            data: reach,
            backgroundColor: [
                '#A5C9CA',
                '#21E1E1',
            ]
        },
        ],
        labels:[
            'Respondieron',
            'No respondieron',
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
