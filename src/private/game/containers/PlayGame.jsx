import { useEffect, useState } from 'react';
import { useGetUser } from '../../navbar/hooks';
import { useGetRoomGame } from '../hooks/useGetRoomGame';
import './PlayGame.css';


const idBranch = window.localStorage.getItem("branchID")

export const PlayGame = ({ onNavigateRoom, setIdRoom}) => {

    const [room, setRoom] = useState([])

    useEffect(() => {
        const getDataPlayGame = async () => {
            const respUser = await useGetUser();
            const respRoom =  await useGetRoomGame(idBranch);
            setRoom(respRoom.resp)
        }

        getDataPlayGame();
    }, [])
    

    return (
        <div className='Play-game'>
            <span>Sala de cine:</span>
            <select
                name="select"
                className="combobox-container"
                onChange={(event) => setIdRoom(event.target.value)}
            >
                <option>Seleccione una sala</option>
                {
                    room.map((sala) => (
                        <option key={sala.value} value={sala.value}>{sala.label}</option>
                    ))
                }
            </select>
            <button onClick={onNavigateRoom}>Jugar</button>
        </div>
    )
}
