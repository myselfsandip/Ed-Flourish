import DsaSheet from './pages/DsaSheet';
import Home from './pages/Home';
import Bca from './pages/Bca';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import JavaSheet from './pages/JavaSheet';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dsa/*' element={<DsaSheet/>} />
          <Route path='/java/*' element={<JavaSheet/>} />
          <Route path='/bca/*' element={<Bca/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
