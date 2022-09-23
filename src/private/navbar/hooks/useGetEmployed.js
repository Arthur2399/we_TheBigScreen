import { API_EMPLOYED } from "../../../helper/routes";

export const useGetUser = async () => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));
    const response = await fetch(API_EMPLOYED, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": 'Bearer '+ bearer.sessiontoken,
        },
    });
    const data = await response.json();
    return data;
}