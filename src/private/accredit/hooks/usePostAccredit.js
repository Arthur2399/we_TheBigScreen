import { API_ACCREDIT_POST } from "../../../helper/routes";

export const usePostAcredit = async (acreditdata) => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));
    
    const options = {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
           Authorization: 'Bearer '+ bearer.sessiontoken,
        },
        body: acreditdata
    };
    const response = await fetch(`${API_ACCREDIT_POST}`, options)
    if(response.status == 201){
        const bad= await response.json();
        alert(JSON.stringify(bad));
    }else{
     // window.location.reload(true);
    }
}