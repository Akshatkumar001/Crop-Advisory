import React from 'react'
import Login from './Pages/Login/Login'
import Ui from './Pages/Ui/Ui'
import CrpAd from './Pages/CrpAd/CrpAd'
import Mrkt from './Pages/Mrkt/Mrkt'
import Cmty from './Pages/Cmty/Cmty'
import Pest from './Pages/Pest/Pest'
import Soil from './Pages/Soil/Soil'
import Profile from './Pages/Profile/Profile'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  
  return (
    <>
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/user-interface" element={<Ui/>} />
        <Route path="/crop-advice" element={<CrpAd/>} />
        <Route path="/pest-detection" element={<Pest/>} />
        <Route path="/soil&fertilizer" element={<Soil/>} />
        <Route path="/market-place" element={<Mrkt/>} />
        <Route path="/community" element={<Cmty/>} />
        <Route path="/pro" element={<Profile/>} />
    </Routes>
    </>
  )
}

export default App