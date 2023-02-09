import { API_EMPLOYED_UPDATE } from "../../../helper/routes";



export const useGetEmploye = async (id) => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));
    const response = await fetch(`${API_EMPLOYED_UPDATE}${id}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": 'Bearer ' + bearer.sessiontoken,
        },
    });
    const data = await response.json();
    return data;
}

export const usePutEmploye = async (updateData, id) => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + bearer.sessiontoken,
        },
        body: updateData
    };
    const response = await fetch(`${API_EMPLOYED_UPDATE}${id}`, options)
    const resp = await response.json()

    return {
        resp,
        response
    }
}

