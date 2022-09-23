import { API_LOGIN } from "../../../helper/routes";

 export const loginForm = async (logindata) => {
    const response = await fetch(API_LOGIN, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: logindata,
    });
    const token = await response.json();

    return token;
}