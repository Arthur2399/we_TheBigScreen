import { Navigate, Route, Routes } from "react-router-dom"
import { Accredit } from "../accredit/pages/Accredit"
import { Layout } from "../layout/Layout"
import { ChangePassword } from "../password/page/ChangePassword"

export const ModuleRoutes = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="accredit" element={<Accredit />} />
        <Route path="password-change" element={<ChangePassword />} />
        <Route path="/" element={<Navigate to="accredit" />} />
      </Routes>
    </>
  )
}
