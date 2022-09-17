import { FormChangePassword } from "../components/FormChangePassword"

export const ChangePassword = () => {
  return (
    <div className="login">
      <div className="form-container">
        <h1 className="title">Crear nueva contraseña</h1>
        <p className="subtitle">Ingresa una contraseña para la cuenta</p>
        <FormChangePassword />
      </div>
    </div>
  )
}
