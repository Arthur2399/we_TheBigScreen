import movieTag from '/assets/logos/Movie-tag.svg';
import './SurveyForm.css';

export const SurveyForm = () => {
    return (
        <div className='Survey-Create'>
            <div className='Survey-Create-Container'>
                <label htmlFor="" className='Survey-Create-label'>Titulo:</label>
                <input type="text" className='Survey-Create-inputs' />

                <label htmlFor="" className='Survey-Create-label'>Pregunta uno:</label>
                <input type="text" className='Survey-Create-inputs' />

                <label htmlFor="" className='Survey-Create-label'>Tipo de respuesta:</label>
                <select name="select" className="Survey-Create-comboBox">
                    <option value="value1" >Del 1 al 5</option>
                    <option value="value2">Del 1 al 10</option>
                </select>

                <label htmlFor="" className='Survey-Create-label'>Pregunta dos:</label>
                <input type="text" className='Survey-Create-inputs' />

                <label htmlFor="" className='Survey-Create-label'>Tipo de respuesta:</label>
                <select name="select" className="Survey-Create-comboBox">
                    <option value="value1" >Del 1 al 5</option>
                    <option value="value2">Del 1 al 10</option>
                </select>
            </div>

            <div className='Survey-Create-Container'>
                <label htmlFor="" className='Survey-Create-label'>Pregunta tres:</label>
                <input type="text" className='Survey-Create-inputs' />

                <label htmlFor="" className='Survey-Create-label'>Tipo de respuesta:</label>
                <select name="select" className="Survey-Create-comboBox">
                    <option value="value1" >Del 1 al 5</option>
                    <option value="value2">Del 1 al 10</option>
                </select>

                <h1>Preguntas Obligatorias</h1>

                <label htmlFor="" className='Survey-Create-label'>Pregunta cuatro:</label>
                <input type="text" className='Survey-Create-inputs' value="¿Cómo calificas la pelicula?" disabled />
                <label htmlFor="" className='Survey-Create-label'>Pregunta cinco:</label>
                <input type="text" className='Survey-Create-inputs' value="¿Pór que le das esa calificacion?" disabled />
            </div>


            <div className='Survey-Create-Container'>

                <label htmlFor="" className='Survey-Create-label'>Fecha de publicacion:</label>
                <input type="date" className='Survey-Create-inputs' />
                <label htmlFor="" className='Survey-Create-label'>Fecha de salida:</label>
                <input type="date" className='Survey-Create-inputs' />

                <div className='Survey-Create-Sent'>
                    <img src={movieTag} alt="employeCreate" />
                    <h1> Publicar encuesta</h1>
                    <span>Al publicar podrás ver los
                        cambios en tu app</span>
                    <button className='Movies-button-sent'>Publicar</button>
                </div>


            </div>
        </div>
    )
}
