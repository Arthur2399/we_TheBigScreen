import { API_GAME_START } from "../../../helper/routes";

export const useMqttGame = async (mensaje, room_number) => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));

    const data = {
        "message": mensaje,
        "topic": room_number,
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + bearer.sessiontoken,
        },
        body: JSON.stringify(data)
    };
    const response = await fetch(`${API_GAME_START}`, options)
    const resp = await response.json();
    return { resp, response }
}