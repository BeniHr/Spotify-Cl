import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
    return (
       <Routes>
        {/* Login Route Location */}
        <Route path='/*' element={<MainPage />}/>
       </Routes>
    );
}
export default App;
