import { useEffect, useState } from 'react';
import { API_IMAGE } from '../../../helper/routes';
import { useGetBillID } from '../hooks/useGetBillid';
import { usePostAcredit } from '../hooks/usePostAccredit';
import './AccreditsPoints.css';

export const AccreditsPoints = ({ billboard, clientData }) => {

    const [funciones, setFunciones] = useState([])
    const [sala, setSala] = useState()


    const postPOSCredits = async (event)=> {
        event.preventDefault();
        const dataAcredit ={
            timetable_ticket_id: parseInt(event.target.elements.selectHour.value),
            credits_ticket: parseInt(clientData.creidt_id),
        }
       const resp = await usePostAcredit(JSON.stringify(dataAcredit))
    }

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
        <form onSubmit={postPOSCredits} className="accredit-points-container">


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
                <select name="selectHour" className="combobox-container">
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
            <button type='submit' className="accredit-points-total-button">Acreditar</button>
        </form>
    )
}
