import { API_EMPLOYED_CREATE } from "../../../helper/routes";

export const usePostEmploye = async (employedata) => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + bearer.sessiontoken,
        },
        body: employedata
    };
    const response = await fetch(`${API_EMPLOYED_CREATE}`, options)
    const resp = await response.json()
    return {
        resp,
        response,
    };
}