import { TopHeadquartersData } from '../components';
import './TopHeadquarters.css';

export const TopHeadquarters = () => {
  return (
    <>
    <table className="top-container-table">
      <thead>
        <tr>
          <th>Sucursal</th>
          <th>Puntos</th>
        </tr>
      </thead>
      <TopHeadquartersData/>
      <TopHeadquartersData/>
      <TopHeadquartersData/>
      <TopHeadquartersData/>
    </table>
  </>
  )
}
