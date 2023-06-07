
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Modulo1 from './pages/Modulo1'
import Modulo2 from './pages/Modulo2'
import Modulo3 from './pages/Modulo3'

import Elsendero from './pages/ElSendero'
import Dianostico from './pages/Dianostico'

function App() {


  return (
    <>
<BrowserRouter>
      
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Modulo1" element={<Modulo1/>} />
          <Route path="/Modulo2" element={<Modulo2/>} />
          <Route path="/Modulo3" element={<Modulo3/>} />
          <Route path="/Elsendero" element={<Elsendero/>} />
          <Route path="/Diagnostico" element={<Dianostico/>} />
         

        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
