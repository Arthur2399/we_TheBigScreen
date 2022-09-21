import { Route, Routes} from 'react-router-dom';
import { ModuleRoutes } from '../private/router/ModuleRoutes';
import { Login, MessagePasswordRecovery, PasswordRecovery } from '../public/index';

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
