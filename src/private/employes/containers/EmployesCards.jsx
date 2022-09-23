import { useEffect, useState } from 'react';
import { EmployesCard } from '../components';
import { useGetEmployesList } from '../hooks/useGetEmployes';
import './EmployesCards.css';

export const EmployesCards = () => {
    const [cardsEmployes, setCardsEmployes] = useState([])

    useEffect(() => {
        async function fetchData() {
            const respEmp = await useGetEmployesList();
            setCardsEmployes(respEmp)
        }
        fetchData();
    }, [])
    return (
        <div className="cards-container">
            {cardsEmployes.map((employe)=>(
                    <EmployesCard  key={employe.id} {...employe}  />
                ))
            }
        </div>
    )
}
