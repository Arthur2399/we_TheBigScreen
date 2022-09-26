import { API_CLIENT_GET } from "../../../helper/routes";

export const useGetClient= async (hash) => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));
    const response = await fetch(API_CLIENT_GET, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": 'Bearer '+ bearer.sessiontoken,
        },
        body:hash
    });
    const data = await response.json();
    return data;
}