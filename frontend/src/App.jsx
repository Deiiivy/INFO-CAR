import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import RegisterVehicle from './components/RegisterVehicle'
import LogIn from './components/logIn/LogIn'
import Registro from './components/logIn/registro/Resgistro'
import NavBar from './components/NavBar'
import MiPerfil from './components/MiPerfil'
import Bateria from './functions/Bateria'
import Combustible from './functions/Combustible'
function App() {
  return (
  <BrowserRouter>
    <main className="app-container">
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<LogIn/>}/>
        <Route path='/registro' element={<Registro/>}/>
        <Route path='/navBar' element={<NavBar/>}/>
        <Route path='/miPerfil' element={<MiPerfil/>}/>
        <Route path='/bateria' element={<Bateria />}  />
        <Route path='/combustible' element={<Combustible />} />
        
      </Routes>
    </main>
    
  </BrowserRouter>
    
  );
}

export default App
