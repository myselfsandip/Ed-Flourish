import { Suspense, lazy } from 'react';
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
import LoadingSpinner from './components/LoadingSpinner';
import Blogs from './pages/Blogs';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import ComingSoon from './pages/ComingSoon';
import Chatbot from "./components/chatbot/Chatbot"
import Jobs from './pages/Jobs';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Dbms from './pages/Dbms';
import SystemDesignSheet from './pages/SystemDesignSheet';
import CpSheet from './pages/CpSheet';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <BrowserRouter>

        <Suspense fallback={<LoadingSpinner />}>
          <ScrollToTop />
          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/verify_email' element={<VerifyEmail />} />
            <Route path='/login' element={<Login />} />
            <Route path='/forgot_password' element={<ForgotPassword />} />
            <Route path='/reset_password' element={<ResetPassword />} />
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/jobs' element={<Jobs />} />
            <Route path='/dsa/*' element={<DsaSheet />} />
            <Route path='/java/*' element={<JavaSheet />} />
            <Route path='/bca/*' element={<Bca />} />
            <Route path='/dbms' element={<Dbms />} />
            <Route path='/system_design' element={<SystemDesignSheet />} />
            <Route path='/cp' element={<CpSheet />} />
          </Routes>
        </Suspense>
        <Chatbot />
      </BrowserRouter>
    </>
  )
}


export default App
