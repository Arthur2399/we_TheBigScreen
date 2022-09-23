import { FormChangePassword } from '../components'
import './ChangePassword.css'

export const ChangePassword = () => {
  return (
    <div className="password-change">
      <div className="form-container">
        <h1 className="title">Crear nueva contraseña</h1>
        <p className="subtitle">Ingresa una contraseña para la cuenta</p>
        <FormChangePassword />
      </div>
    </div>
  )
}
