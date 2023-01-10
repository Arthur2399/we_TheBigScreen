import { API_GAME_ROOM_POST } from "../../../helper/routes";

export const usePostRoom = async (data) => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + bearer.sessiontoken,
        },
        body: data
    };
    const response = await fetch(`${API_GAME_ROOM_POST}`, options)
    const resp = await response.json();
    return {resp,response}
}