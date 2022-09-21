import './NextPremiere.css'

export const NextPremiere = () => {
    return (
        <div className="next-premiere-info animate__animated animate__fadeIn">
            <img src='https://es.web.img2.acsta.net/medias/nmedia/18/86/59/81/19852610.jpg' alt="movie" />
            <div className="next-premiere-info-text">
                <h1>La dama de hierro</h1>
                <div className="next-premiere-grid">
                    <span>Género:</span>
                    <span>Drama</span>
                    <span>Protagonista:</span>
                    <span>Meryll Street</span>        
                    <span>Fecha:</span>
                    <span>29-09-2022</span>
                </div>
            </div>
        </div>
    )
}
