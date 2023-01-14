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
import { QuestionGame } from '../game/pages/QuestionGame';
import { TopPlayersGame } from '../game/pages/TopPlayersGame';
import { WinnerGame } from '../game/pages/WinnerGame';

export const ModuleRoutes = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname.includes('room')
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
          <Route path="room/:id" element={<LobbyGame />} >
            <Route path="question/:id" element={<QuestionGame />} />
            <Route path="topPlayers" element={<TopPlayersGame />} />
            <Route path="winner" element={<WinnerGame />} />
          </Route>
        </Route>
        <Route path="/*" element={<Navigate to="home" />} />
      </Routes>
    </>
  )
}
