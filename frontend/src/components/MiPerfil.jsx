import React, { useState } from "react";
import "../css/MiPerfil.css";
import NavBar from './NavBar';

function MiPerfil() {
  const [showNavBar, setShowNavBar] = useState(false);

  const handleMenuClick = () => {
    setShowNavBar(prevState => !prevState);
  };

  const handleNavBarClose = () => {
    setShowNavBar(false);
  };

  const usuarioEnSesion = JSON.parse(localStorage.getItem("personaEnSesion"));
  console.log(usuarioEnSesion);

  const personaData = JSON.parse(localStorage.getItem("personaData")) || {};
  const perfil = personaData[usuarioEnSesion];

  return (
    <>
      <div className={`miPerfilContainer ${showNavBar ? 'opaque' : ''}`}>
        <div className='perfilHeader'>
          <button onClick={handleMenuClick}>
            <img src="./menu.png" className='menuLogo' alt="Menu" />
          </button>
          <img src="./Logo infocar.png" alt="Logo" />
        </div>
        
        {perfil ? (
          <div className="perfilUsuario">
            <h2>Mi Perfil</h2>
            <p><strong>Usuario:</strong> {perfil.usuario}</p>
            <p><strong>Nombre del Vehículo:</strong> {perfil.nombreVehiculo}</p>
            <p><strong>Matrícula:</strong> {perfil.matricula}</p>
            <p><strong>Año:</strong> {perfil.año}</p>
            <p><strong>Tipo de Gasolina:</strong> {perfil.tipoGasolina}</p>
            <p><strong>Galones Actuales:</strong> {perfil.galones}</p>
            <p><strong>Kilometraje:</strong> {perfil.kilometraje}</p>
            <p><strong>Fecha de Ingreso:</strong> {new Date(perfil.fechaIngreso).toLocaleString()}</p>
          </div>
        ) : (
          <p>No se encontró información del usuario.</p>
        )}
      </div>

      {showNavBar && <NavBar onClose={handleNavBarClose} />} 
    </>
  );
}

export default MiPerfil;
