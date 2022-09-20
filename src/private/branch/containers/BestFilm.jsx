import './BestFilm.css';

export const BestFilm = () => {
    return (
        <div className="best-film-info">
            <img src='https://upload.wikimedia.org/wikipedia/pt/1/19/Day.jpg' alt="movie" />
            <div className="best-film-info-text">
                <h1>Dia de la indepencia </h1>
                <div className="best-film-grid">
                    <span>Calificacion:</span>
                    <span> 5 estellas</span>
                    <span>Vistas:</span>
                    <span>3250 vistas</span>
                </div>
            </div>
        </div>
    )
}
