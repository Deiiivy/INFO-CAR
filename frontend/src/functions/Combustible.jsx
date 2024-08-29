import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Combustible.css';

function Combustible() {
  const [kilometraje, setKilometraje] = useState(0);
  const [galones, setGalones] = useState(0);
  const [nuevoKilometraje, setNuevoKilometraje] = useState('');
  const [consumo, setConsumo] = useState(null);
  const navigate = useNavigate();

  // Cargar datos del localStorage al iniciar
  useEffect(() => {
    const usuarioEnSesion = JSON.parse(localStorage.getItem("personaEnSesion"));
    const personaData = JSON.parse(localStorage.getItem("personaData")) || {};
    const perfil = personaData[usuarioEnSesion];

    if (perfil) {
      setKilometraje(perfil.kilometraje);
      setGalones(perfil.galones);
    }
  }, []);

  // Función para volver a la ruta /home
  const handleBackClick = () => {
    navigate('/home');
  };

  // Función para calcular consumo de combustible
  const handleCalcularClick = () => {
    if (nuevoKilometraje && galones > 0) {
      const kmRecorridos = nuevoKilometraje - kilometraje;
      const consumoCalculado = kmRecorridos / galones;
      setConsumo(consumoCalculado.toFixed(2));
    }
  };

  return (
    <div className="combustible-container">
      <button className="close-btn" onClick={handleBackClick}>X</button>
      
      <h2>Combustible</h2>
      
      <div className="combustible-info">
        <div className="current-data">
          <h3>Datos Actuales</h3>
          <p>Kilometraje: {kilometraje} km</p>
          <p>Galones en el tanque: {galones} gal</p>
        </div>

        <div className="input-section">
          <h3>Nuevo Kilometraje</h3>
          <input 
            type="number" 
            value={nuevoKilometraje} 
            onChange={(e) => setNuevoKilometraje(e.target.value)} 
            placeholder="Ingrese nuevo kilometraje" 
          />
        </div>

        <button className="calcular-btn" onClick={handleCalcularClick}>Calcular Consumo</button>

        {consumo && (
          <div className="resultado">
            <h3>Consumo Calculado</h3>
            <p>{consumo} km/gal</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Combustible;
