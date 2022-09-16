import { Route, Routes, Navigate } from 'react-router-dom';
import { Login } from '../src/public/login/pages/Login';
import { PasswordRecovery } from '../src/public/login/pages/PasswordRecovery';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="password-recovery" element={<PasswordRecovery />} />
                <Route path="/*" element={<Navigate to="/login" />} />
            </Routes>
        </>
    )
}
