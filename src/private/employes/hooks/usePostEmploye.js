import { API_EMPLOYED_CREATE } from "../../../helper/routes";

export const usePostEmploye = async (employedata) => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));
    
    const options = {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
           Authorization: 'Bearer '+ bearer.sessiontoken,
        },
        body: employedata
    };
    const response = await fetch(`${API_EMPLOYED_CREATE}`, options)
    if(response.status ==400){
        const bad= await response.json(); 
        alert(JSON.stringify(bad.email[0]));
    }else{
      window.location.reload(true);
    }
}