import { useContext } from 'react';
import {usePostPassword } from'../hooks/usePostPassword.js';
import { AuthContext } from '../../../public/auth/context/AuthContext';



export const FormChangePassword = () => {
  const { logout } = useContext( AuthContext );
 
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const passwordData = {
      password: event.target.elements.currentPassword.value,
      new_password: event.target.elements.newPassword.value,
      confirm_password: event.target.elements.repeatPassword.value,
    }
    const resp = await usePostPassword((JSON.stringify(passwordData)))
    logout();
    navigate('/login', {
        replace: true
    });
  }
 
  return (
    <form  onSubmit={handleSubmit} className="form">
      <label className="label">Contraseña actual</label>
      <input type="password" 
             name="currentPassword"
             placeholder="*********" 
             className="input input-password" 
             autoComplete="current-password"
             />   
      <label className="label">Nueva Contraseña</label>
      <input type="password" 
             placeholder="*********" 
             className="input input-password" 
             name="newPassword"
             autoComplete="new-password"
             />
      <label className="label">Repetir la contraseña</label>
      <input type="password" 
             placeholder="*********" 
             className="input input-password" 
             name="repeatPassword"
             autoComplete="new-password"
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
