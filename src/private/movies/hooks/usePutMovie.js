import {API_MOVIES_UPDATE} from "../../../helper/routes";
 
export const useGetMovie= async (id) => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));
    const response = await fetch(`${API_MOVIES_UPDATE}${id}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": 'Bearer '+ bearer.sessiontoken,
        },
    });
    const resp = await response.json();
    return {
        response,
        resp
    };
}

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
    const resp = await response.json()
    return{
        response,
        resp
    }
}

