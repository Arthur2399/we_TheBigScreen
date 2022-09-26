import { useExchangeTable } from '../hooks/useExchangeTable';
import './ExchangeTable.css';

export const ExchangeTable = ({ award, clientData }) => {

    const { awardList, increment, decrement, subTotal, deletes, postPOSAward } = useExchangeTable(award, clientData);

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
                    {
                        awardList &&
                        awardList.map((aw, i) => (
                            <tr key={i}>
                                <td>{aw.name_award}</td>
                                <td>{aw.cant}</td>
                                <td>{`${aw.number_award} pts`}</td>
                                <td>
                                    <button className="exchange-points-table-button" onClick={() => decrement(aw.id)}></button>
                                    <button className="exchange-points-table-button" onClick={() => increment(aw.id)} ></button>
                                    <button className="exchange-points-table-button" onClick={() => deletes(aw.id)}></button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <div className="exchange-points-total">
                <span>TOTAL A DEBITAR:</span>
                <span> {subTotal} pts.</span>
            </div>
            <button className="exchange-points-total-button" onClick={postPOSAward}>Debitar</button>
        </div>
    )
}
