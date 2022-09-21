export const FormChangePassword = () => {
  return (
    <form className="form">
      <label className="label">Contraseña actual</label>
      <input type="password" placeholder="*********" className="input input-password" />   
      <label className="label">Nueva Contraseña</label>
      <input type="password" placeholder="*********" className="input input-password" />
      <label className="label">Repetir la contraseña</label>
      <input type="password" placeholder="*********" className="input input-password" />
      <button
        value="Confirmar"
        className="primary-button login-button"
      >
        Confirmar
      </button>
    </form>
  )
}
