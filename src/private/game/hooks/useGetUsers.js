import { API_GAME_ROOM_USERS } from "../../../helper/routes";

export const useGetUsers = async (roomNumber) => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + bearer.sessiontoken,
        },
    };
    const response = await fetch(`${API_GAME_ROOM_USERS}/${roomNumber}`, options)
    const resp = await response.json();
    console.log(response.status)
    return {resp,response}
}