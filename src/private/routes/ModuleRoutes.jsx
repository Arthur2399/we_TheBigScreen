import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
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
import { LobbyGame } from '../game/pages/LobbyGame';

export const ModuleRoutes = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/game/room"
        ? <></>
        : <Menu />
      }
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
        <Route path="game" element={<StartGame />} >
          <Route path="room" element={<LobbyGame />} />
        </Route>
        <Route path="/*" element={<Navigate to="home" />} />
      </Routes>
    </>
  )
}
