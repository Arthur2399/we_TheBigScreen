import './Questions.css';

export const Questions = ({ questions=[]}) => {
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
