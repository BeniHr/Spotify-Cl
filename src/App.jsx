import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Login from './pages/Login';

function App() {
    return (
       <Routes>
        <Route path='/*' element={<MainPage />}/>
        <Route path='/login' element={<Login />}/>
       </Routes>
    );
}
export default App;
