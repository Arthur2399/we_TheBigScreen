import mobile from '/assets/logos/mobile.svg';
import './QuestionPublish.css';
import { useGetQuestions } from '../hooks/useGetQuestions';
import { useEffect, useState } from 'react';

export const QuestionPublish = () => {

  const [questions, setQuestions] = useState([])

  useEffect(() => {
      async function fetchData() {
          const respQue = await useGetQuestions();
          setQuestions(respQue)
      }
      fetchData();
  }, [])

  return (
    <div className="publish-question-phone">
    <h1 className="title-phone">{questions.name}</h1>
    <img src={mobile} alt="mobile" />
    <div>
          <span>{questions.question1}</span>
          <span>{questions.question2}</span>
          <span>{questions.question3}</span>
          <span>{questions.question4}</span>
          <span>{questions.question5}</span>
    </div>
</div>
  )
}
