import { useEffect, useState } from 'react';
import { API_IMAGE } from '../../../helper/routes';
import { useGetBillID } from '../hooks/useGetBillid';
import './AccreditsPoints.css';

export const AccreditsPoints = ({ billboard, clientData }) => {

    console.log(billboard)
    const [funciones, setFunciones] = useState([])
    const [sala, setSala] = useState()

    useEffect(() => {
        async function fetchData() {
            const respF = await useGetBillID(billboard);
            const horas = respF[0].billboard
            const salas = respF[0]
            setFunciones(horas)
            setSala(salas)
        }
        if (billboard){
            fetchData();
            }
    }, [billboard])

    return (
        <form className="accredit-points-container">


            <div className="Billboard-cards animate__animated animate__fadeIn">
            {sala
                ? <img src={`${API_IMAGE}${sala.movie_photo}`} alt="movie" onClick={() => { setbillboardID(id) }} />
                : <h2></h2>
            }
            </div>
            {sala
                ? <h2>{sala.movie_name}</h2>
                : <h2>-</h2>

            }
            <div className="accredit-grid">
                <span>Función:</span>
                <select name="select" className="combobox-container">
                    {funciones.map((bill, i) => (
                        <option value={bill.id} key={i}>{bill.time}</option>
                    ))}

                </select>
                <span>Sala:</span>
                <span>Número{funciones.room} </span>
                <span>Sede:</span>
                {sala
                    ? <span>{sala.branch}</span>
                    : <span>-</span>
                }

            </div>
            <button className="accredit-points-total-button">Acreditar</button>
        </form>
    )
}
