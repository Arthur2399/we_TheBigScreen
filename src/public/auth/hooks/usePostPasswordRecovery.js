import { API_RECOVERY_PASS } from "../../../helper/routes";

 export const usePostPasswordRecovery = async (data) => {
    const response = await fetch(API_RECOVERY_PASS, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: data,
    });
    const resp = await response.json();

    return {response, resp};
}