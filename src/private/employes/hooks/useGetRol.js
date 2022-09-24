import {API_ROL} from "../../../helper/routes";
 

export const useGetRol= async () => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));
    const response = await fetch(API_ROL, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": 'Bearer '+ bearer.sessiontoken,
        },
    });
    const data = await response.json();
    return data;
}