import { Route, Routes, Navigate } from 'react-router-dom';
import { ModuleRoutes } from '../private/router/ModuleRoutes';
import { Login } from '../public/login/pages/Login';
import { MessagePasswordRecovery } from '../public/login/pages/MessagePasswordRecovery';
import { PasswordRecovery } from '../public/login/pages/PasswordRecovery';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="password-recovery" element={<PasswordRecovery />} />
                <Route path="email-sent" element={<MessagePasswordRecovery/>} />
                <Route path="/*" element={<ModuleRoutes />} />
            </Routes>
        </>
    )
}
