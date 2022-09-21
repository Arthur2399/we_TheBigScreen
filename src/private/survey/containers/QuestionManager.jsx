import { Modal } from '../../../components';
import { useModal } from '../../../hooks';
import { SurveyForm } from '../components';
import surveyControl from '../../../assets/logos/survey-control.svg';
import './QuestionManager.css';

export const QuestionManager = () => {
    const [isOpenModal,openModal,closeModal] = useModal(false);
  
  return (
    <div className="manage-questions-info">
    <div className="manage-questions-options">
      <h2> ¿Nueva encuesta?</h2>
      <p>Ingresa preguntas que te ayuden a conocer la calidad de tu servicio</p>
      <div>
        <button className="survey-create-button"> Editar</button>
        <button className="survey-create-button" onClick={openModal}> Crear</button>
        <Modal isOpen={isOpenModal} closeModal={closeModal} title="Crear nueva encuesta" x={"80%"} y= {"580px"}>
            <SurveyForm/>
        </Modal>
      </div>
    </div>
    <img src={surveyControl} alt="control-survey" />
  </div>
  )
}
