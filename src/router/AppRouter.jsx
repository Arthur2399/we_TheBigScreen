import { Navigate, Route, Routes } from 'react-router-dom';
import { ModuleRoutes } from '../private';
import { Login,PasswordRecovery } from '../public/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={
                    <PublicRoute>
                        <Routes>
                            <Route path="/*" element={<Login />} />
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
