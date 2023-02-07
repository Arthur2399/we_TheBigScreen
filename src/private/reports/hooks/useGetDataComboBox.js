import { API_BRANCHS, API_PERIOD } from "../../../helper/routes";


export const useGetBranchs= async () => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));
    const response = await fetch(API_BRANCHS, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": 'Bearer '+ bearer.sessiontoken,
        },
    });
    const statusBranchs = response.status
    const dataBranchs = await response.json();
    return {dataBranchs, statusBranchs};
}

export const useGetPeriod= async () => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));
    const response = await fetch(API_PERIOD, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": 'Bearer '+ bearer.sessiontoken,
        },
    });
    const statusGetPeriod = response.status
    const dataGetPeriod = await response.json();

    return {dataGetPeriod, statusGetPeriod };
}