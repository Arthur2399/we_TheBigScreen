import movieTag from '/assets/logos/Movie-tag.svg';
import movie from '/assets/logos/reports.svg'
import './SurveyCreate.css';

export const SurveyCreate = () => {
    return (
        <form className='Survey-Create'>
            <div className='Survey-Create-Container'>
                <label htmlFor="" className='Survey-Create-label'>Titulo:</label>
                <input type="text" className='Survey-Create-inputs' />

                <label htmlFor="" className='Survey-Create-label'>Pregunta uno:</label>
                <input type="text" className='Survey-Create-inputs' />

                <label htmlFor="" className='Survey-Create-label'>Pregunta dos:</label>
                <input type="text" className='Survey-Create-inputs' />

                <label htmlFor="" className='Survey-Create-label'>Pregunta tres:</label>
                <input type="text" className='Survey-Create-inputs' />
            </div>

            <div className='Survey-Create-Container'>

                <h1>Preguntas Obligatorias</h1>
                <label htmlFor="" className='Survey-Create-label'>Pregunta cuatro:</label>
                <input type="text" className='Survey-Create-inputs' value="¿Cómo calificas la pelicula?" disabled />
                <label htmlFor="" className='Survey-Create-label'>Pregunta cinco:</label>
                <input type="text" className='Survey-Create-inputs' value="¿Pór que le das esa calificacion?" disabled />

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
                    <button className='Survey-button-sent'>Publicar</button>
                </div>
            </div>
        </form>
    )
}
