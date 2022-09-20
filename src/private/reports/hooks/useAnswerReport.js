export const useAnswerReport = () => {
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
            'No respondieron',
            'Respondieron'
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
    return {
        data,
        options
    }
}
