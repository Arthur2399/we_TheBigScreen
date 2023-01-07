import { Navigate, Route, Routes } from 'react-router-dom';
import { Accredit } from '../accredit';
import { Awards } from '../awards';
import { Branch } from '../branch';
import { ChangePassword } from '../password';
import { Employes } from '../employes';
import { Exchange } from '../exchange';
import { Menu } from '../navbar/containers';
import { Movies } from '../movies';
import { Reports } from '../reports';
import { Surveys } from '../survey';
import { StartGame } from '../game/pages/StartGame';

export const ModuleRoutes = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="accredit" element={<Accredit />} />
        <Route path="home" element={<Branch />} />
        <Route path="employes" element={<Employes />} />
        <Route path="reports" element={<Reports />} />
        <Route path="exchange" element={<Exchange />} />
        <Route path="movies" element={<Movies />} />
        <Route path="survey" element={<Surveys />} />
        <Route path="awards" element={<Awards />} />
        <Route path="password-change" element={<ChangePassword />} />
        <Route path="start-game" element={<StartGame />} />
        <Route path="/*" element={<Navigate to="home"/>} />
      </Routes>
    </>
  )
}
