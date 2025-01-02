import { Suspense,lazy } from 'react';
import DsaSheet from './pages/DsaSheet';

const Home = lazy(() => new Promise(resolve => 
  setTimeout(() => import('./pages/Home').then(resolve), 400)
));
import Bca from './pages/Bca';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import JavaSheet from './pages/JavaSheet';
import Settings from './pages/Settings';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import VerifyEmail from './pages/VerifyEmail';
// import LoadingSpinner from './components/LoadingSpinner';


function App() {
  // console.log(import.meta.env.SERVER_URL); // Use your environment variable here

  return (
    <>
      <BrowserRouter>
      {/* <Suspense fallback={<LoadingSpinner />}> */}
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
        {/* </Suspense> */}
      </BrowserRouter>
    </>
  )
}


export default App
