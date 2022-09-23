import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { types } from '../types/types';

const init = () => {
  const user = JSON.parse( localStorage.getItem('jwt') );

  return {
    logged: !!user,
    user: user,
  }
}

export const AuthProvider = ({ children }) => {
  const [ authState, dispatch ] = useReducer( authReducer, {}, init );

  const login = ( sessiontoken = '' ) => {
    const tokenData = { sessiontoken }
    const action = { type: types.login, payload: tokenData }
    localStorage.setItem('jwt',JSON.stringify(tokenData) );
    dispatch(action);
  }

  const logout = () => {
    localStorage.removeItem('jwt');
    const action = { type: types.logout };
    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{
      ...authState,
      login,
      logout,
    }}>
      { children }
    </AuthContext.Provider>
  );
}
