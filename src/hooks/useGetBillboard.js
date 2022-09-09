import { API_BILLBOARD } from "../helper/routes";

export const useGetBillboard =  async( ) => {
    
    const url = API_BILLBOARD;
    const resp = await  fetch( url);
    const { data=[] } = await resp.json();
    
    const movies = data.map( mov => ({
        id: mov.id,
        movie_name: mov.movie_name,
        movie_photo: mov.movie_photo,
    }))

    return movies;
}