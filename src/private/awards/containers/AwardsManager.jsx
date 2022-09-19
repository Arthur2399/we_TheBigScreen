import gift from '../../../assets/logos/gift.svg';
import './AwardsManager.css';

export const AwardsManager = () => {
    return (
        <div className="awards-container">
            <div className="awards-create-text">
                <h2>Ingresa un nuevo premio</h2>
                <p>Registra la recompensa para tus clientes</p>
                <button className="awards-create-button"> ingresar premio</button>
            </div>
            <img src={gift} alt="" />
        </div>
    )
}
