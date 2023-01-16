import { API_GAME_TOP_PLAYERS } from "../../../helper/routes";

export const useGetTopPlayers = async (roomNumber) => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + bearer.sessiontoken,
        },
    };
    const response = await fetch(`${API_GAME_TOP_PLAYERS}${roomNumber}`, options)
    const resp = await response.json();
    return {resp,response}
}