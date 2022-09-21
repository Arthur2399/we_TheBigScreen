import mobile from '/assets/logos/mobile.svg';
import './QuestionPublish.css';

export const QuestionPublish = () => {
  return (
    <div className="publish-question-phone">
    <h1 className="title-phone">¿Cómo te fue?</h1>
    <img src={mobile} alt="mobile" />
    <div>
        <span>¿Cómo estuvo la atención de los empleados?</span>
        <span>¿Cómo estuvo la preparación de los alimentos?</span>
        <span>¿Cómo estuvo el aseo de la sala de cine?</span>
        <span>¿Cómo calificarías a la película?</span>
        <span>¿Porqué le das esa calificación?</span>
    </div>
</div>
  )
}
