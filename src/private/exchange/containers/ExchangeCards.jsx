
import { useEffect, useState } from 'react';
import { ExchangeCard } from '../components';
import { useGetAwardsList } from '../hooks/useGetAwards';
import './ExchangeCards.css';

export const ExchangeCards = ({setAward}) => {

    const [cardsAwards, setCardsAwards] = useState([]);
    const [awardId, setAwardId] = useState()
     
    setAward(awardId)


    useEffect(() => {
        async function fetchData() {
            const respAwr = await useGetAwardsList();
            setCardsAwards(respAwr)
        }
        fetchData();
    }, [])



    return (
        <div className="exchange-cards-container">
            {
                cardsAwards.map((award)=>(
                    <ExchangeCard key={award.id} {...award} setAwardId={setAwardId}/>
                ))
            }
        </div>
    )
}
