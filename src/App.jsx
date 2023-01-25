import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import PrivateRoutes from './components/LoginGuard/PrivateRoute';
import { useState } from 'react';

function App() {
    const [auth, setAuth] = useState({ token: false });
    return (
        <Routes>
            <Route element={<PrivateRoutes auth={auth} />}>
            <Route path="/*" element={<MainPage />} />
            </Route>
            <Route path="/login" element={<Login setAuth={setAuth}/>} />
        </Routes>
    );
}
export default App;
