import  canguil from '/assets/logos/popcorn.svg';
import arrow from '/assets/icons/left-arrow.svg';
import './BranchInfo.css';

export const BranchInfo = () => {
    return (
        <div className="Home-info-container">
            <img src={canguil} alt="popcorn" className='animate__animated animate__bounce'/>
            <h1>The Big Screen</h1>
            <div className="Home-arrow-text">
                <img src={arrow} alt="arrow" />
                <p>Conoce todas las estadísticas de tu negocio favorito por los cinéfilos </p>
            </div>
        </div>
    )
}
