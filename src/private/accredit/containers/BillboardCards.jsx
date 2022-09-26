import { useEffect, useState } from 'react';
import { BillboardCard } from '../components';
import { useGetBillboarList } from '../hooks/useGetBillboardList';
import './BillboardCards.css';

export const BillboardCards = ({ setBillboard }) => {

    const [cardsBillboard, setCardsBillboard] = useState([]);
    const [billboardID, setBillboardID] = useState()

    setBillboard(billboardID)


    useEffect(() => {
        async function fetchData() {
            const respBill = await useGetBillboarList();
            setCardsBillboard(respBill)
        }
        fetchData();
    }, [])



    return (
        <div className="Billboard-cards-container">
            {
                cardsBillboard.map((billboard) => (
                    <BillboardCard key={billboard.id} {...billboard} />
                ))
            }

        </div>
    )
}
