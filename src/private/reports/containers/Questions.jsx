import './Questions.css';

export const Questions = ({ questions=[]}) => {
    /* console.log(questions) */
    return (
        <div>
            <ol>
                {
                    questions.map((ques,i) => (
                        <li key={i}>
                            <span>{ques}</span>
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}
