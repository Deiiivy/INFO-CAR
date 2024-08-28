import React, { useState } from "react";
import "./Registro.css";
import { Link } from "react-router-dom";

function Registro() {
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [persona, setPersona] = useState(null); // Estado para almacenar los datos del formulario

  const validate = () => {
    let errors = {};

    const usuario = document.querySelector(
      'input[placeholder="Usuario"]'
    ).value;
    const contraseña = document.querySelector(
      'input[placeholder="Contraseña"]'
    ).value;
    const nombreVehiculo = document.querySelector(
      'input[placeholder="Nombre Vehículo"]'
    ).value;
    const matricula = document.querySelector(
      'input[placeholder="Matrícula Vehículo"]'
    ).value;
    const año = document.querySelector('input[placeholder="Modelo"]').value;
    const tipoGasolina = document.querySelector(
      'input[placeholder="Corriente, Extra, Diesel"]'
    ).value;
    const galones = document.querySelector(
      'input[placeholder="Galones"]'
    ).value;
    const kilometraje = document.querySelector(
      'input[placeholder="Km/h"]'
    ).value;

    if (!/^[a-zA-Z0-9]{3,15}$/.test(usuario)) {
      errors.usuario =
        "El usuario debe tener entre 3 y 15 caracteres alfanuméricos.";
    }

    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(contraseña)) {
      errors.contraseña =
        "La contraseña debe tener mínimo 8 caracteres, incluyendo letras y números.";
    }

    if (!/^[a-zA-Z]{3}\d{2}[a-zA-Z0-9]?$/.test(matricula)) {
      errors.matricula = "La matrícula debe tener el formato 'abc123' o 'abc12x'.";
    }
    

    if (!/^\d{4}$/.test(año) || año < 1886 || año > new Date().getFullYear()) {
      errors.año = "Introduce un año válido.";
    }

    if (galones <= 0) {
      errors.galones = "La cantidad de galones debe ser un número positivo.";
    }

    if (kilometraje <= 0) {
      errors.kilometraje = "El kilometraje debe ser un número positivo.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const usuario = document.querySelector(
        'input[placeholder="Usuario"]'
      ).value;

      const personaData = {
        [usuario]: {
          usuario: usuario,
          contraseña: document.querySelector('input[placeholder="Contraseña"]')
            .value,
          nombreVehiculo: document.querySelector(
            'input[placeholder="Nombre Vehículo"]'
          ).value,
          matricula: document.querySelector(
            'input[placeholder="Matrícula Vehículo"]'
          ).value,
          año: document.querySelector('input[placeholder="Modelo"]').value,
          tipoGasolina: document.querySelector(
            'input[placeholder="Corriente, Extra, Diesel"]'
          ).value,
          galones: document.querySelector('input[placeholder="Galones"]').value,
          kilometraje: document.querySelector('input[placeholder="Km/h"]')
            .value,
          fechaIngreso: new Date().toISOString(), 
        },
      };
      let personas = JSON.parse(localStorage.getItem("personaData")) || {};

      personas = { ...personas, ...personaData };

      localStorage.setItem("personaData", JSON.stringify(personas));

      setPersona(personaData);
      setIsFormValid(true);
      setFormSubmitted(true);
    }
  };

  return (
    <div className="registroContainer">
      <img src="./Logo infocar.png" alt="" />
      {formSubmitted ? (
        <div className="registroExitoso">
          <p>¡Registro exitoso!</p>
          <Link to={"/login"} className="linkRegistrarme">
            Ir a Iniciar Sesión
          </Link>
        </div>
      ) : (
        <form className="registroForm" onSubmit={handleSubmit}>
          <p>Ingrese su Usuario:</p>
          <input type="text" placeholder="Usuario" required />
          {errors.usuario && <p className="error">{errors.usuario}</p>}

          <p>Ingrese su Contraseña:</p>
          <input type="password" placeholder="Contraseña" required />
          {errors.contraseña && <p className="error">{errors.contraseña}</p>}

          <p>Nombre del Vehículo:</p>
          <input type="text" placeholder="Nombre Vehículo" required />

          <p>Matricula ó placa del Vehículo:</p>
          <input type="text" placeholder="Matrícula Vehículo" required />
          {errors.matricula && <p className="error">{errors.matricula}</p>}

          <p>Año del Vehículo:</p>
          <input type="number" placeholder="Modelo" required />
          {errors.año && <p className="error">{errors.año}</p>}

          <p>Tipo de Gasolina:</p>
          <input type="text" placeholder="Corriente, Extra, Diesel" required />

          <p>Cantidad de Galones Actuales:</p>
          <input type="number" placeholder="Galones" required />
          {errors.galones && <p className="error">{errors.galones}</p>}

          <p>Kilometraje Total actual:</p>
          <input type="number" placeholder="Km/h" required />
          {errors.kilometraje && <p className="error">{errors.kilometraje}</p>}

          <button type="submit" className="linkRegistrarme">
            Registrarme
          </button>
        </form>
      )}
    </div>
  );
}

export default Registro;
