import { API_MOVIES_BEST } from "../../../helper/routes";

export const useGetMoviesBest= async () => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));
    const response = await fetch(API_MOVIES_BEST, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": 'Bearer '+ bearer.sessiontoken,
        },
    });
    const data = await response.json();
    return data;
}