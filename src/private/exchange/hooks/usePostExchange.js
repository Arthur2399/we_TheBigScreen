import { API_EXCHANGE_POST } from "../../../helper/routes";

export const usePostExchange = async (exchangeData) => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));
    
    const options = {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
           Authorization: 'Bearer '+ bearer.sessiontoken,
        },
        body: exchangeData
    };
    const response = await fetch(`${API_EXCHANGE_POST}`, options)
    if(response.status ==400){
        const bad= await response.json(); 
        alert(JSON.stringify(bad.email[0]));
    }else{
      window.location.reload(true);
    }
}