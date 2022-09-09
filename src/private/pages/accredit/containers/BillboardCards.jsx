import { useEffect, useState } from 'react';
import { useGetBillboard } from '../../../../hooks/useGetBillboard';
import './BillboardCards.css';

export const BillboardCards = () => {

    const [billboard, setBillboard] = useState(['Hola', 'Mundo']);

    const getBillboard = async () => {
        const newbillboards = await useGetBillboard();
        setBillboard(newbillboards);
    }

    useEffect(() => {
        getBillboard();
    }, []);

    return (
        <div className="Billboard-cards-container">
            {billboard.map(bill => (
                <BillboardCards key={bill} billboard ={bill}/>
            ))
            }
        </div>
    )
}
