import { API_GAME_ROOM_START } from "../../../helper/routes";

export const useGetRoomGame = async (branchId) => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + bearer.sessiontoken,
        },
    };
    const response = await fetch(`${API_GAME_ROOM_START}/${branchId}`, options)
    const resp = await response.json();
    return {resp,response}
}