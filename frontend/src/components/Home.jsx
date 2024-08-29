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
        <FunctionCar title="Diagnostico del Motor" className='funcion' url="/diagnostico" />
        <FunctionCar title="Bateria" className='funcion' url="/bateria" />
        <FunctionCar title="Combustible" className='funcion' url="/combustible" />
        
      </div>
      </div>
    </>
  );
}

export default Home;