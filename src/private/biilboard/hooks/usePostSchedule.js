import { API_BILLBOARDS_FORM,API_BILLBOARDS_LIST } from "../../../helper/routes";

const bearer = JSON.parse(localStorage.getItem("jwt"));

export const usePostSchedule = async (data) => {
  const response = await fetch(`${API_BILLBOARDS_FORM}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + bearer.sessiontoken,
    },
    body:data
  });
  const resp = await response.json();
  return { response, resp };
};


import { API_BILLBOARDS_MOVIES } from "../../../helper/routes";


export const useGetSchedule = async (data) => {
    const response = await fetch(`${API_BILLBOARDS_LIST}`, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": 'Bearer ' + bearer.sessiontoken,
        },
        body:data
    });
    const resp = await response.json();
    return { response, resp };
}