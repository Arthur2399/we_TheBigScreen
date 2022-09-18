import { Navigate, Route, Routes } from "react-router-dom"
import { Accredit } from "../accredit/pages/Accredit"
import { Employes } from "../employes/pages/Employes"
import { Exchange } from "../exchange/page/Exchange"
import { Movies } from "../movies/page/Movies"
import { Menu } from "../navbar/page/Menu"
import { ChangePassword } from "../password/page/ChangePassword"

export const ModuleRoutes = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="accredit" element={<Accredit />} />
        <Route path="employes" element={<Employes />} />
        <Route path="exchange" element={<Exchange />} />
        <Route path="movies" element={<Movies />} />
        <Route path="password-change" element={<ChangePassword />} />
        <Route path="/" element={<Navigate to="accredit" />} />
      </Routes>
    </>
  )
}
