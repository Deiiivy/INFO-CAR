import React from 'react'
import FunctionCar from './FunctionCar'
import '../css/Home.css'
import RegisterVehicle from './RegisterVehicle'
function Home() {
  return (
<>
    <div className='homeHeader'>
      <button><img src="./menu.png" className='menuLogo'/></button>
    <img src="./Logo infocar.png" alt="Logo" />
      </div>
      <div className='registerVehicle'>
      <RegisterVehicle/>
    </div>
    <div className='home-container'>
     <FunctionCar title="Vigilancia" className='funcion'/>
     <FunctionCar title="Diagnostico del vehiculo"className='funcion' />
     <FunctionCar title="Tablero de instrumentos" className='funcion'/>
     <FunctionCar title="Combustible" className='funcion'/>
     <FunctionCar title="Registros de conducción" className='funcion'/>
     <FunctionCar title="Historial de conducción" className='funcion'/>
     <FunctionCar title="Datos de fabricante"className='funcion' />
     <FunctionCar title="Estilo de conducción" className='funcion'/>
     <FunctionCar title="Mantenimiento" className='funcion'/>
     <FunctionCar title="FAQ" className='funcion'/>
     <FunctionCar title="Configuración" className='funcion'/>
     <FunctionCar title="HUD"className='funcion' />
     <FunctionCar title="Estacionamiento"className='funcion' />
     <FunctionCar title="Compra" className='funcion'/>
     <FunctionCar title="Blackbox" className='funcion'/>
     <FunctionCar title="Diagnostico del motor" className='funcion'/>
    </div>
    </>
  )
}

export default Home
