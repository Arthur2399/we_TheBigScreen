import award from '/assets/logos/award.svg';
import arrow from '/assets/icons/left-arrow.svg';
import './AwardsInfo.css';

export const AwardsInfo = () => {
    return (
        <div className="Awards-info-container">
            <img src={award} alt="popcorn" className='animate__animated animate__bounce'/>
            <h1>The Big Screen</h1>
            <div className="arrow-text">
                <img src={arrow} alt="arrow" />
                <p>Premia a tus usuarios, con boletos,
                    comida o eventos, para que siempre
                    escoja venir a tu cine
                </p>
            </div>
        </div>
    )
}
