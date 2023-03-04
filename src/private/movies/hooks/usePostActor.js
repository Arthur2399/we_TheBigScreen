import { API_ACTORS } from "../../../helper/routes";

export const usePostActor = async (data) => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));
    
    const options = {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
           Authorization: 'Bearer '+ bearer.sessiontoken,
        },
        body: data
    };
    const response = await fetch(`${API_ACTORS}`, options);
    const resp = await response.json();
    return {
        resp,
        response
    }
}