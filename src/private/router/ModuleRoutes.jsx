import { Navigate, Route, Routes } from 'react-router-dom';
import { Accredit } from '../accredit/index';
import { Awards } from '../awards/index';
import { Branch } from '../branch/index';
import { ChangePassword } from '../password/index';
import { Employes } from '../employes/index';
import { Exchange } from '../exchange/index';
import { Menu } from '../navbar/containers/index';
import { Movies } from '../movies/index';
import { Reports } from '../reports/index';
import { Surveys } from '../survey/index';

export const ModuleRoutes = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="accredit" element={<Accredit />} />
        <Route path="/" element={<Branch />} />
        <Route path="employes" element={<Employes />} />
        <Route path="reports" element={<Reports />} />
        <Route path="exchange" element={<Exchange />} />
        <Route path="movies" element={<Movies />} />
        <Route path="survey" element={<Surveys />} />
        <Route path="awards" element={<Awards />} />
        <Route path="password-change" element={<ChangePassword />} />
        <Route path="/*" element={<Navigate to="/"/>} />
      </Routes>
    </>
  )
}
