import { Navigate, Route, Routes } from "react-router-dom"
import { Accredit } from "../accredit/pages/Accredit"
import { Menu } from "../navbar/page/Menu"
import { ChangePassword } from "../password/page/ChangePassword"

export const ModuleRoutes = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="accredit" element={<Accredit />} />
        <Route path="password-change" element={<ChangePassword />} />
        <Route path="/" element={<Navigate to="accredit" />} />
      </Routes>
    </>
  )
}
