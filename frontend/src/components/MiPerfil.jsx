import React from "react";

function MiPerfil() {
  // Obtiene el nombre del usuario en sesión
  const usuarioEnSesion = localStorage.getItem("personaEnSesion");
  
  // Obtiene los datos de todas las personas
  const personaData = JSON.parse(localStorage.getItem("personaData")) || {};

  // Verifica si el usuario en sesión tiene datos almacenados
  const perfil = personaData[usuarioEnSesion];

  return (
    <div className="miPerfilContainer">
      {usuarioEnSesion ? (
        <div className="perfilUsuario">
          <h2>Perfil de {usuarioEnSesion}</h2>
          <p><strong>Usuario:</strong> {usuarioEnSesion}</p>
          <p><strong>Contraseña:</strong> {personaData[usuarioEnSesion].contraseña}</p>
          <p><strong>Nombre del Vehículo:</strong> {personaData[usuarioEnSesion].nombreVehiculo}</p>
          <p><strong>Matrícula:</strong> {personaData[usuarioEnSesion].matricula}</p>
          <p><strong>Año:</strong> {personaData[usuarioEnSesion].año}</p>
          <p><strong>Tipo de Gasolina:</strong> {personaData[usuarioEnSesion].tipoGasolina}</p>
          <p><strong>Galones Actuales:</strong> {personaData[usuarioEnSesion].galones}</p>
          <p><strong>Kilometraje:</strong> {personaData[usuarioEnSesion].kilometraje}</p>
          <p><strong>Fecha de Ingreso:</strong> {new Date(personaData[usuarioEnSesion].fechaIngreso).toLocaleString()}</p>
        </div>
      ) : (
        <p>No se encontró información del usuario en sesión.</p>
      )}
    </div>
  );
}

export default MiPerfil;
