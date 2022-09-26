import { useEffect, useState } from 'react';
import { useGetBillID } from '../hooks/useGetBillid';
import './AccreditsPoints.css';

export const AccreditsPoints = ({billboard, clientData}) => {
    
    console.log(billboard)
    const [funciones, setFunciones] = useState([])

    useEffect(() => {
        async function fetchData() {
            const respF = await useGetBillID(billboard);
            const horas = respF[0].billboard
             setFunciones(horas)
        }
        fetchData();
    }, [billboard])

    return (
        <form className="accredit-points-container">
            <div className="accredit-grid">
                <span>Función:</span>
                <select name="select" className="combobox-container">
                   {funciones.map((bill,i)=>(
                       <option value={bill.id} key={i}>{bill.time}</option>
                   ))}
                
                </select>
                <span>Sala:</span>
                <span>Número 6</span>
                <span>Película:</span>
                <span>The Crown</span>
                <span>Sede:</span>
                <span>CCI</span>
            </div>
            <button  className="accredit-points-total-button">Acreditar +100pts</button>
        </form>
    )
}
