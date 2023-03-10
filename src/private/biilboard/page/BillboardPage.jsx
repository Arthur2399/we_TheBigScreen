import { useState } from 'react';
import { useEffect } from 'react';
import { BillboardCards } from '../containers';
import { useGetMoviesList } from '../hooks/useGetBillboard';
import './BillboardPage.css';

export const BillboardPage = () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const id = localStorage.getItem('branchID');
    const fetchGetBillboard = async () => {
      const { resp, response } = await useGetMoviesList(id);
      setMovieList(resp);
    }

    fetchGetBillboard();
  }, [])



  return (
    <section className="Billboard">
      <div className="Billboard-container">
        <h1 className="Billboard-main-title">Cartelera de Quicentro</h1>
        <div className="Billboard-desing-container">
          <div className="Billboard-view-container">

            <div className="Billboard-billboard">
              <h2>Mis películas </h2>
              <div className="Billboard-billboard-scroll">
                {/* <MovieCards cardsMovies={cardsMovies} isReload={isReload} setIsReload={setIsReload} /> */}
                <BillboardCards movieList={movieList}/>

              </div>
            </div>

            <div className="Billboard-billboard">
              <h2>En carteleta </h2>
              <div className="Billboard-billboard-scroll">
                {/* <MovieCards cardsMovies={cardsMovies} isReload={isReload} setIsReload={setIsReload} /> */}
              </div>
            </div>

          </div>
          {/* <MoviesInfo /> */}
        </div>
      </div>
    </section>
  )
}
