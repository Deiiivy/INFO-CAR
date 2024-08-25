import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import RegisterVehicle from './components/RegisterVehicle'

function App() {
  return (
    <main className="app-container">
      <RegisterVehicle />
      <Home />
    </main>
  );
}

export default App
