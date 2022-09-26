import { useEffect, useState } from "react";
import { useGetProduct } from "./useGetProduct";

export const useExchangeTable = (award,clientData) => {

    const [awardList, setAwardList] = useState([]);
    const [subTotal, setSubTotal] = useState(0)

    const increment = (id) => {
        setAwardList((prevState) =>
            prevState.map(element => {
                if (element.id == id) {
                    element.cant++
                    return { ...element, cant: element.cant }
                } else {
                    return element
                }
            })
        )
    }

    const decrement = (id) => {
        setAwardList((prevState) =>
            prevState.map(element => {
                if (element.id == id) {
                    if (element.cant > 1)
                        element.cant--
                    return { ...element, cant: element.cant }
                } else {
                    return element
                }
            })
        )
    }

    const deletes = (id) => {
        setAwardList((prevState) =>
            prevState.filter(element => {
                return element.id != id
            }))
    }

    const postPOSAward = () =>{
        let details = [];
        awardList.forEach(element => {
            const subT = element.number_award * element.cant
            details.push({
                awards_detail: element.id, // id premio
                price: element.number_award,        // points
                quantity: element.cant,     // cantidad
                subtotal: subT,    
            })
        });
        const dataPOS = {
            header:{
                credits_translation: clientData.id,
                total_cost: subTotal,
                total_credits: clientData.credit,
                balance: clientData.credit - subTotal,
            },
            detail:details,
        }

        console.log(dataPOS);
    }

    useEffect(() => {
        async function fetchData() {
            const respAwr = await useGetProduct(award);
            setAwardList((prevState) => {
                let aux = false;
                prevState.forEach(element => {
                    if (element.id == award) {
                        aux = true;
                    }
                }
                ); if (aux == false) {
                    const reg = { ...respAwr, cant: 1 }
                    return [...prevState, reg]
                } else {
                    return prevState
                }
            })
        }
        if (award){
            fetchData();
            }
        }, [award])
        
        useEffect(() => {
            const subTotalCal = () => {
                let cont = 0;
                awardList.forEach(element => {
                    cont = element.cant * element.number_award + cont
                });
                setSubTotal(cont)
            }
            subTotalCal()
        }, [awardList])
    
        
        return { awardList, increment, decrement, subTotal, deletes,postPOSAward }
    }
