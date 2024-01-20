import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ProfilePage from './pages/Profile';
import RegisterPage from './pages/Register';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/profile' element={<ProfilePage/>} />
      <Route path='/register' element={<RegisterPage/>} />
    </Routes>
  );
};

export default Router;