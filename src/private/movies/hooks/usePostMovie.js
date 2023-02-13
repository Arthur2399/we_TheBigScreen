import { API_MOVIES_CREATE } from "../../../helper/routes";

export const usePostMovie = async (movieData) => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));
    
    const options = {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
           Authorization: 'Bearer '+ bearer.sessiontoken,
        },
        body: movieData
    };
    const response = await fetch(`${API_MOVIES_CREATE}`, options);
    const resp = await response.json();
    return {
        resp,
        response
    }
}