
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Modulo1 from './pages/Modulo1'

function App() {


  return (
    <>
<BrowserRouter>
      
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Modulo1" element={<Modulo1/>} />
         

        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
