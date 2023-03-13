import { useState } from 'react';
import { useEffect } from 'react';
import { BillboardsInfo } from '../components/BillboardsInfo';
import { BillboardCards } from '../containers';
import { BillboardLists } from '../containers/BillboardLists';
import { useGetBillboardList, useGetMoviesList } from '../hooks/useGetBillboard';
import './BillboardPage.css';

export const BillboardPage = () => {

  const [movieList, setMovieList] = useState([]);
  const [billboardList, setBillboardList] = useState([])
  const [isReload, setIsReload] = useState(0);


  useEffect(() => {
    const id = localStorage.getItem('branchID');
    const fetchGetBillboard = async () => {
      const { resp } = await useGetMoviesList(id);
      setMovieList(resp);
      const { resp: respSum } = await useGetBillboardList(id);
      setBillboardList(respSum.data);
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
                <BillboardCards movieList={movieList} isReload={isReload} setIsReload={setIsReload} />
              </div>
            </div>

            <div className="Billboard-billboard">
              <h2>En carteleta </h2>
              <div className="Billboard-billboard-scroll">
                <BillboardLists billboardList={billboardList} />
              </div>
            </div>

          </div>
          <BillboardsInfo />
        </div>
      </div>
    </section>
  )
}
