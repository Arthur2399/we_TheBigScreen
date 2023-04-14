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
  const [nameBranch, setnameBranch] = useState("")


  useEffect(() => {
    const branchName =  JSON.parse(localStorage.getItem("userData"))
    setnameBranch(branchName[0].branch_user)
    const id = localStorage.getItem('branchID');
    const fetchGetBillboard = async () => {
      const { resp } = await useGetMoviesList(id);
      setMovieList(resp);
      const { resp: respSum } = await useGetBillboardList(id);
      setBillboardList(respSum.data);
    }
    fetchGetBillboard();
  }, [isReload])



  return (
    <section className="Billboard">
      <div className="Billboard-container">
        <h1 className="Billboard-main-title">Cartelera de {nameBranch}</h1>
        <div className="Billboard-desing-container">
          <div className="Billboard-view-container">

            <div className="Billboard-billboard">
              <h2>Mis películas </h2>
              <div className="Billboard-billboard-scroll">
                <BillboardCards movieList={movieList} isReload={isReload} setIsReload={setIsReload} />
              </div>
            </div>

            <div className="Billboard-billboard">
              <h2>En carteleta (Hoy) </h2>
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
