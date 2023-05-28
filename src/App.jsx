
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Modulo1 from './pages/Modulo1'
import Modulo2 from './pages/Modulo2'

function App() {


  return (
    <>
<BrowserRouter>
      
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Modulo1" element={<Modulo1/>} />
          <Route path="/Modulo2" element={<Modulo2/>} />
         

        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
