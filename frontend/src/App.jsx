import DsaSheet from './pages/DsaSheet';
import Home from './pages/Home';
import Bca from './pages/Bca';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dsa/*' element={<DsaSheet/>} />
          <Route path='/bca/*' element={<Bca/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
