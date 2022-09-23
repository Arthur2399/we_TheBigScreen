import { useEffect, useState } from 'react';
import { TopHeadquartersData } from '../components';
import { useGetBranchs } from '../hooks/useGetBranchs';
import './TopHeadquarters.css';

export const TopHeadquarters = () => {

  const [branchs, setBranchs] = useState([])

  useEffect(() => {
      async function fetchData() {
          const respBra = await useGetBranchs();
          setBranchs(respBra)
      }
      fetchData();
  }, [])

  return (
    <>
    <table className="top-container-table">
      <thead>
        <tr>
          <th>Sucursal</th>
          <th>Puntos</th>
        </tr>
      </thead>
      {branchs.map((branch)=>(
        <TopHeadquartersData key={branch.id} {...branch}/>
      ))}
    </table>
  </>
  )
}
