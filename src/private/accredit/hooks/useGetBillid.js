import { API_BILLBOARD_ID } from "../../../helper/routes";

export const useGetBillID= async (id=1) => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));
    const response = await fetch(`${API_BILLBOARD_ID}${id}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": 'Bearer '+ bearer.sessiontoken,
        },
    });
    const data = await response.json();
    return data;
}