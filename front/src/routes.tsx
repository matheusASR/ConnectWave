import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PerfilPage from './pages/Profile';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/perfil' element={<PerfilPage/>} />
    </Routes>
  );
};

export default Router;