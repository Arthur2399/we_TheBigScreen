import { API_CHANGE_PASS } from "../../../helper/routes";

export const usePostPassword = async (data) => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
             Authorization: 'Bearer ' + bearer.sessiontoken,
        },
        body: data
    };
    const response = await fetch(`${API_CHANGE_PASS}`, options)
    const resp = await response.json()
    return {
        resp,
        response,
    };
}
