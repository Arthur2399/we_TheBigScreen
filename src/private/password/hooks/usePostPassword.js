import { API_CHANGE_PASS } from "../../../helper/routes";

export const usePostPassword = async (passwordData) =>{
    const bearer = JSON.parse(localStorage.getItem('jwt'));

    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer '+bearer.sessiontoken
        },
        body: passwordData,
      };
      
      fetch(API_CHANGE_PASS, options)
        .then(response => response.json())

  return options;
}
