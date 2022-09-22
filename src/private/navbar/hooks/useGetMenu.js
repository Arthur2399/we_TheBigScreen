import { API_MENU } from "../../../helper/routes";

export const useGetMenu = async () => {
    const bearer = sessionStorage.getItem('jwt');
    const response = await fetch(API_MENU, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": 'Bearer '+ bearer,
        },
    });
    const data = await response.json();
    return data;
}