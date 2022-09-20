import { Navigate, Route, Routes } from "react-router-dom"
import { Accredit } from "../accredit/pages/Accredit"
import { Awards } from "../awards/pages/Awards"
import { ChangePassword } from "../password/page/ChangePassword"
import { Employes } from "../employes/pages/Employes"
import { Exchange } from "../exchange/page/Exchange"
import { Menu } from "../navbar/page/Menu"
import { Movies } from "../movies/page/Movies"
import { Surveys } from "../survey/pages/Surveys"
import { Branch } from "../branch/pages/Branch"
import { Reports } from "../reports/pages/Reports"

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
