import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Bateria.css';

function Bateria() {
  const navigate = useNavigate();

  // Función para volver a la ruta /home
  const handleBackClick = () => {
    navigate('/home');
  };

  return (
    <div className="bateria-container">
      <button className="close-btn" onClick={handleBackClick}>X</button>
      
      <h2>Batería</h2>
      
      <div className="bateria-info">
        <div className="battery-level">
          <h3>Nivel de Carga</h3>
          <div className="battery-bar">
            <div className="battery-charge" style={{ width: '80%' }}></div>
          </div>
          <p>80% Cargado</p>
        </div>

        <div className="battery-health">
          <h3>Salud de la Batería</h3>
          <p>Buena</p>
        </div>
      </div>
    </div>
  );
}

export default Bateria;
