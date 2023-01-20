import { useEffect } from 'react';
import { useGetUser } from '../../navbar/hooks';
import { useGetRoomGame } from '../hooks/useGetRoomGame';
import './PlayGame.css';

export const PlayGame = ({ onNavigateRoom, setIdRoom}) => {

    const salas = [
        {
            label: "Sala 1",
            value: 1
        },
        {
            label: "Sala 2",
            value: 2
        },
        {
            label: "Sala 3",
            value: 3
        },
    ]


    useEffect(() => {
        const getDataPlayGame = async () => {
            const respUser = await useGetUser();
            const respRoom =  await useGetRoomGame('1');
            console.log(respRoom)
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
                    salas.map((sala) => (
                        <option key={sala.value} value={sala.value}>{sala.label}</option>
                    ))
                }
            </select>
            <button onClick={onNavigateRoom}>Jugar</button>
        </div>
    )
}
