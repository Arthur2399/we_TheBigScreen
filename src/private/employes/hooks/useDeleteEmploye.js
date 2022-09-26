
import { API_EMPLOYED_DELETE } from "../../../helper/routes";

export const useDeleteEmploye = async (id) => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));
    

    const options = {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer '+ bearer.sessiontoken,
         }
      };
      
      const response = await fetch(`${API_EMPLOYED_DELETE}${id}`, options)
      if(response.status ==400){
          const bad= await response.json(); 
          return JSON.stringify(bad);
      }else{
        window.location.reload(true);
      }
}