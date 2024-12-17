import DsaSheet from './pages/DsaSheet';
import Home from './pages/Home';
import Bca from './pages/Bca';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import JavaSheet from './pages/JavaSheet';
import Settings from './pages/Settings';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import VerifyEmail from './pages/VerifyEmail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/verify_email' element={<VerifyEmail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot_password' element={<ForgotPassword />} />
          <Route path='/reset_password' element={<ResetPassword />} />
          <Route path='/' element={<Home />} />
          <Route path='/dsa/*' element={<DsaSheet />} />
          <Route path='/java/*' element={<JavaSheet />} />
          <Route path='/bca/*' element={<Bca />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
