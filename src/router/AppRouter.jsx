import { Navigate, Route, Routes } from 'react-router-dom';
import { ModuleRoutes } from '../private';
import { Login, MessagePasswordRecovery, PasswordRecovery } from '../public/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="auth/*" element={
                    <PublicRoute>
                        <Routes>
                            <Route path="login" element={<Login />} />
                            <Route path='password-recovery' element={<PasswordRecovery />} />
                            <Route path='email-sent' element={<MessagePasswordRecovery />} />
                            <Route path='/*' element={<Navigate to="login" />} />
                        </Routes>
                    </PublicRoute>
                } />
                <Route path="/*" element={
                    <PrivateRoute>
                        <ModuleRoutes />
                    </PrivateRoute>
                } />
            </Routes>
        </>
    )
}
