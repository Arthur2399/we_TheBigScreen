import {API_EMPLOYED_UPDATE} from "../../../helper/routes";
 

export const usePutEmploye= async ( updateData,id) => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));
    const response = await fetch(API_EMPLOYED_UPDATE+id, {
        method: "PUT",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": 'Bearer '+ bearer.sessiontoken,
        },
        body: updateData
    });
    const data = await response.json();
    return data;
}

export const useGetEmploye= async (id=1) => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));
    const response = await fetch(`${API_EMPLOYED_UPDATE}${id}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": 'Bearer '+ bearer.sessiontoken,
        },
    });
    const data = await response.json();
    return data;
}