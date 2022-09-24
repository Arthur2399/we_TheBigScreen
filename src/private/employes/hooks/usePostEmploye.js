import { API_EMPLOYED_CREATE } from "../../../helper/routes";
/* 
 export const usePostEmploye = async (employedata) => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));
    const response = await fetch(API_EMPLOYED_CREATE, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": 'Bearer '+ bearer.sessiontoken,
        },
        body: employedata,
    });
    const resp = await response.json();
    console.log(employedata);
    console.log(resp)

    return resp;
} */
export const usePostEmploye = async (employedata) => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));
    
    const options = {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
           Authorization: 'Bearer '+ bearer.sessiontoken,
        },
        body: employedata
    };
    console.log(employedata)
    const response = await fetch(`${API_EMPLOYED_CREATE}`, options)
    console.log(response.status)
    if(response.status ==400){
        const bad= await response.json(); 
        alert(JSON.stringify(bad.email[0]));
    }else{
      window.location.reload(true);
    }
/*         .then(response =>{
            response.json()
            if(response.status ==400){
                alert('Hay errores en los campo por favor revisar');
            }else{
                window.location.reload(true);
            }
}) .then(response => console.log(response))
    .catch(err => console.error(err));
 */
}