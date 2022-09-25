import movieTag from '/assets/logos/Movie-tag.svg';
import movie from '/assets/logos/reports.svg'
import './SurveyCreate.css';
import { usePostSurvey } from '../hooks/usePostSurvey';

const handleSubmit = async (event) => {
    event.preventDefault();
    const surveyData = {
        name: event.target.elements.title.value,
        question1: event.target.elements.uno.value,
        question2: event.target.elements.dos.value,
        question3: event.target.elements.tres.value,
        question4: event.target.elements.cuatro.value,
        question5: event.target.elements.cinco.value,
    }
    const resp = await usePostSurvey(JSON.stringify(surveyData));
    //console.log(surveyData)
}

export const SurveyCreate = () => {
    return (
        <form className='Survey-Create' onSubmit={handleSubmit}>
            <div className='Survey-Create-Container'>
                <label htmlFor="title" className='Survey-Create-label'>Titulo:</label>
                <input type="text"
                    className='Survey-Create-inputs'
                    name='title'
                    required={true}
                />
                <label htmlFor="uno" className='Survey-Create-label'>Pregunta uno:</label>
                <input type="text"
                    className='Survey-Create-inputs'
                    name='uno'
                    required={true}
                />
                <label htmlFor="dos" className='Survey-Create-label'>Pregunta dos:</label>
                <input type="text"
                    className='Survey-Create-inputs'
                    name='dos'
                    required={true}
                />
                <label htmlFor="tres" className='Survey-Create-label'>Pregunta tres:</label>
                <input type="text"
                    className='Survey-Create-inputs'
                    name='tres'
                    required={true}
                />
            </div>
            <div className='Survey-Create-Container'>
                <h1>Preguntas Obligatorias</h1>
                <label htmlFor="cuatro" className='Survey-Create-label'>Pregunta cuatro:</label>
                <input type="text"
                    name='cuatro'
                    className='Survey-Create-inputs'
                    value="¿Cómo calificas la pelicula?"
                    disabled />
                <label htmlFor="cinco" className='Survey-Create-label'>Pregunta cinco:</label>
                <input type="text"
                    className='Survey-Create-inputs'
                    value="¿Pór que le das esa calificacion?"
                    name='cinco'
                    disabled />
                <div className="Survey-info-ob">
                    <img src={movie} alt="movie" className='movie-info' />
                    <h2>¿Porque son obligatorias?</h2>
                    <p>Esta preguntas nos ayudaran a obtener datos relevantes de las peliculas para mostrarte graficas</p>
                </div>
            </div>
            <div className='Survey-Create-Container'>
                <div className='Survey-Create-Sent'>
                    <img src={movieTag} alt="employeCreate" />
                    <h1> Publicar encuesta</h1>
                    <span>Al publicar la encuesta tus clientes la podran llenar al finalizar cada pelicula</span>
                    <button className='Movies-button-sent' type='submit'>Publicar</button>
                </div>
            </div>
        </form>
    )
}
