import React, { useState } from 'react';
import FunctionCar from './FunctionCar';
import '../css/Home.css';
import RegisterVehicle from './RegisterVehicle';
import NavBar from './NavBar'; // Asegúrate de importar NavBar

function Home() {
  const [showNavBar, setShowNavBar] = useState(false);

  const handleMenuClick = () => {
    setShowNavBar(prevState => !prevState);
  };
  const handleNavBarClose = () => {
    setShowNavBar(false);
  };

  return (
    <>
    <div>
    <div className='home'>
    {showNavBar && <NavBar onClose={handleNavBarClose}/>}
    </div>
      <div className={`homeHeader ${showNavBar ? 'opaque' : ''}`}>
        <button onClick={handleMenuClick}>
          <img src="./menu.png" className='menuLogo' alt="Menu" />
        </button>
        <img src="./Logo infocar.png" alt="Logo" />
      </div>
      <div className={`registerVehicle ${showNavBar ? 'opaque' : ''}`}>
        <RegisterVehicle />
      </div>

      <div className={`home-container ${showNavBar ? 'opaque' : ''}`}>
        <FunctionCar title="Vigilancia" className='funcion' />
        <FunctionCar title="Diagnostico del vehiculo" className='funcion' />
        <FunctionCar title="Tablero de instrumentos" className='funcion' />
        <FunctionCar title="Combustible" className='funcion' />
        <FunctionCar title="Registros de conducción" className='funcion' />
        <FunctionCar title="Historial de conducción" className='funcion' />
        <FunctionCar title="Datos de fabricante" className='funcion' />
        <FunctionCar title="Estilo de conducción" className='funcion' />
        <FunctionCar title="Mantenimiento" className='funcion' />
        <FunctionCar title="FAQ" className='funcion' />
        <FunctionCar title="Configuración" className='funcion' />
        <FunctionCar title="HUD" className='funcion' />
        <FunctionCar title="Estacionamiento" className='funcion' />
        <FunctionCar title="Compra" className='funcion' />
        <FunctionCar title="Blackbox" className='funcion' />
        <FunctionCar title="Diagnostico del motor" className='funcion' />
      </div>
      </div>
    </>
  );
}

export default Home;