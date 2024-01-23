import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ProfilePage from './pages/Profile';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/profile' element={<ProfilePage/>} />
      <Route path='/register' element={<RegisterPage/>} />
      <Route path='/login' element={<LoginPage/>} />
    </Routes>
  );
};

export default Router;