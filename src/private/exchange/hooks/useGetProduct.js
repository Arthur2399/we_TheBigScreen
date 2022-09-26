import { API_AWARDS_UPDATE } from "../../../helper/routes";

export const useGetProduct= async (id) => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));
    const response = await fetch(`${API_AWARDS_UPDATE}${id}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": 'Bearer '+ bearer.sessiontoken,
        },
    });
    const data = await response.json();
    return data;
}