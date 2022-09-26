import {API_MOVIES_UPDATE} from "../../../helper/routes";
 

export const usePutMovie= async ( updateData,id) => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));
    const options = {
        method: 'PUT',
        headers: {
           'Content-Type': 'application/json',
           Authorization: 'Bearer '+ bearer.sessiontoken,
        },
        body: updateData
    };
    const response = await fetch(`${API_MOVIES_UPDATE}${id}`, options)
    if(response.status ==400){
        const bad= await response.json(); 
        alert(JSON.stringify(bad));
    }else{
        window.location.reload(true);
    }
}

export const useGetMovie= async (id=1) => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));
    const response = await fetch(`${API_MOVIES_UPDATE}${id}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": 'Bearer '+ bearer.sessiontoken,
        },
    });
    const data = await response.json();
    return data;
}