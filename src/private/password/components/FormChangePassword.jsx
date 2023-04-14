import { useContext, useState } from 'react';
import { usePostPassword } from '../hooks/usePostPassword.js';
import { AuthContext } from '../../../public/auth/context/AuthContext';
import Swal from 'sweetalert2';

export const FormChangePassword = () => {
  const { logout } = useContext(AuthContext);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setrepeatPassword] = useState("")  


  const handleSubmit = async (event) => {
    event.preventDefault();

    const passwordData = {
      password: currentPassword,
      new_password: newPassword,
      confirm_password: repeatPassword,
    }


    const {resp,response} = await usePostPassword(JSON.stringify(passwordData));
    if(response.status == 200){
      Swal.fire({
        icon: 'success',
        title: 'Contraseña cambiada',
        text: resp.Mensaje,
        confirmButtonColor: "#FD5D5D"
    })
    logout();
    }else{
      const fisrtKey = Object.keys(resp)[0]
      Swal.fire({
          icon: 'error',
          title: 'Error',
          text: resp[fisrtKey],
          confirmButtonColor: "#FD5D5D"
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="label">Contraseña actual</label>
      <input
        type="password"
        className="input input-password"
        placeholder="*********"
        autoComplete="current-password"
        value={currentPassword}
        onChange={e => setCurrentPassword(e.target.value)}
      />
      <label className="label">Nueva Contraseña</label>
      <input 
        type="password"
        placeholder="*********"
        className="input input-password"
        autoComplete="new-password"
        value={newPassword}
        onChange={e=> setNewPassword(e.target.value)}
      />
      <label className="label">Repetir la contraseña</label>
      <input type="password"
        placeholder="*********"
        className="input input-password"
        autoComplete="new-password"
        value={repeatPassword}
        onChange={e=>setrepeatPassword(e.target.value)}
      />
      <button
        value="Confirmar"
        type="submit"
        className="primary-button login-button"
      >
        Confirmar
      </button>
    </form>
  )
}
