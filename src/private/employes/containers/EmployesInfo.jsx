import contrat from '/assets/logos/contrat.svg';
import arrow from '/assets/icons/left-arrow.svg';
import './EmployesInfo.css';

export const EmployesInfo = () => {
    return (
        <div className="employe-info-container">
            <img src={contrat} alt="contrat" className='animate__animated animate__bounce'/>
            <h1>The Big Screen</h1>
            <div className="employe-arrow-text">
                <img src={arrow} alt="arrow" />
                <p>Ingresa un nuevo empleado con los
                    permisos necesarios para que
                    acceda al sistema.
                </p>
            </div>
        </div>
    )
}
