import React from 'react'
import FunctionCar from './FunctionCar'
import '../css/Home.css'

function Home() {
  return (
    <div className='home-container'>
     <FunctionCar title="Vigilancia" />
     <FunctionCar title="Diagnostico del vehiculo" />
     <FunctionCar title="Tablero de instrumentos" />
     <FunctionCar title="Combustible" />
     <FunctionCar title="Registros de conducción" />
     <FunctionCar title="Historial de conducción" />
     <FunctionCar title="Datos de fabricante" />
     <FunctionCar title="Estilo de conducción" />
     <FunctionCar title="Mantenimiento" />
     <FunctionCar title="FAQ" />
     <FunctionCar title="Configuración" />
     <FunctionCar title="HUD" />
     <FunctionCar title="Estacionamiento" />
     <FunctionCar title="Compra" />
     <FunctionCar title="Blackbox" />
     <FunctionCar title="Diagnostico del motor" />
    </div>
  )
}

export default Home
