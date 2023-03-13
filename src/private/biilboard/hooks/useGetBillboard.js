import { API_BILLBOARDS_MOVIES,API_BILLBOARDS_SUMMARY } from "../../../helper/routes";



const bearer = JSON.parse(localStorage.getItem('jwt'));

export const useGetMoviesList = async (idBranch) => {
    const response = await fetch(`${API_BILLBOARDS_MOVIES}${idBranch}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": 'Bearer ' + bearer.sessiontoken,
        },
    });
    const resp = await response.json();
    return { response, resp };
}



export const useGetBillboardList = async (idBranch) => {
    const response = await fetch(`${API_BILLBOARDS_SUMMARY}${idBranch}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": 'Bearer ' + bearer.sessiontoken,
        },
    });
    const resp = await response.json();
    return { response, resp };
}