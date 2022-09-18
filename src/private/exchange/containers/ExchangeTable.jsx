import './ExchangeTable.css';

export const ExchangeTable = () => {
    return (
        <div className="exchange-points-container">
            <table className="exchange-points-table">
                <thead>
                    <tr>
                        <th>Premios</th>
                        <th>Cant</th>
                        <th>Puntos</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Canguil pequeño</td>
                        <td>2</td>
                        <td>500 pts</td>
                        <td>
                            <button className="exchange-points-table-button"></button>
                            <button className="exchange-points-table-button"></button>
                            <button className="exchange-points-table-button"></button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="exchange-points-total">
                <span>TOTAL A DEBITAR:</span>
                <span> 550 pts.</span>
            </div>
            <button className="exchange-points-total-button">Debitar -550pts</button>
        </div>
    )
}
