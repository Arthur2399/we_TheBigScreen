import { API_GAME_ROOM_QUESTIONS } from "../../../helper/routes";

export const useGetQuestions = async (roomNumber) => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + bearer.sessiontoken,
        },
    };
    const response = await fetch(`${API_GAME_ROOM_QUESTIONS}${roomNumber}`, options)
    const resp = await response.json();
    return {resp,response}
}