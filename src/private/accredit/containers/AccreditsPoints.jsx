import './AccreditsPoints.css';

export const AccreditsPoints = ({billboad, clienData}) => {

    
    return (
        <div className="accredit-points-container">
            <div className="accredit-grid">
                <span>Fecha:</span>
                <select name="select" className="combobox-container">
                    <option value="value1">Seleccione uno</option>
                    <option value="value2">01/02/2022</option>
                    <option value="value3">02/02/2022</option>
                </select>
                <span>Función:</span>
                <select name="select" className="combobox-container">
                    <option value="value1">Seleccione uno</option>
                    <option value="value2">15h00</option>
                    <option value="value3">16h00</option>
                </select>
                <span>Sala:</span>
                <span>Número 6</span>
                <span>Película:</span>
                <span>The Crown</span>
                <span>Sede:</span>
                <span>CCI</span>
            </div>
            <button className="accredit-points-total-button">Acreditar +100pts</button>
        </div>
    )
}
