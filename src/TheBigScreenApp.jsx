import { AuthProvider } from './public/auth/context/AuthProvider';
import { AppRouter } from './router/AppRouter';

export const TheBigScreenApp = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  )
}
