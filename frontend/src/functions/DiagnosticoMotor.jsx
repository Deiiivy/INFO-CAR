import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import '../css/DiagnosticoMotor.css'


const Diagnostico = () => {
  const [vehiculo, setVehiculo] = useState(""); // Puedes establecer un valor predeterminado
  const [estadosPartes, setEstadosPartes] = useState([]);

  const navigate = useNavigate();

  // Función para volver a la ruta /home
  const handleBackClick = () => {
    navigate('/home');
  };

  useEffect(() => {
    // Partes del motor
    const partesMotor = [
      "Bloque del motor",
      "Cigüeñal",
      "Pistones",
      "Válvulas",
      "Árbol de levas",
      "Cárter",
      "Bielas",
      "Bomba de aceite",
      "Culata",
      "Sistema de escape"
    ];

    // Generar estados aleatorios
    const estados = ["BUENO", "MEDIO", "MALO"];
    const colores = {
      BUENO: "green",
      MEDIO: "orange",
      MALO: "red",
    };

    const estadosAleatorios = partesMotor.map((parte) => ({
      nombre: parte,
      estado: estados[Math.floor(Math.random() * estados.length)],
    }));

    // Guardar los estados aleatorios y asignar colores
    const partesConColores = estadosAleatorios.map((parte) => ({
      ...parte,
      color: colores[parte.estado],
    }));

    setEstadosPartes(partesConColores);
  }, []);

  return (
    <div className="diagnosticoContainer">
      
      <button className="close-btn" onClick={handleBackClick}>X</button>
      <h2>Diagnóstico del Motor </h2>
      
      <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: "10px", backgroundColor: "#f0f0f0" }}>ESTADO</th>
          </tr>
        </thead>
        <tbody>
          {estadosPartes.map((parte, index) => (
            <tr key={index}>
              <td style={{ textAlign: "left", padding: "10px", color: parte.color }}>
                {parte.nombre} - {parte.estado}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Diagnostico;
