import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './LogIn.css';
import { Navigate, Link } from 'react-router-dom';
import { useState } from 'react';

function LogIn() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  function handleLogin(e) {
    e.preventDefault();

    const usuario = document.querySelector('input[placeholder="Usuario"]').value;
    const contraseña = document.querySelector('input[placeholder="Contraseña"]').value;

    // Obtener los datos de localStorage
    const personaData = JSON.parse(localStorage.getItem('personaData'));

    // Verificar si el usuario existe en personaData
    if (personaData && personaData[usuario]) {
      // Comparar la contraseña
      if (personaData[usuario].contraseña === contraseña) {
        const usuarioEnSesion = usuario
        localStorage.setItem("personaEnSesion", JSON.stringify(usuarioEnSesion));
        // Redirigir al usuario a la página principal
        navigate('/');
      } else {
        setError('Contraseña incorrecta');
      }
    } else {
      setError('Usuario no encontrado');
    }
  }

  return (
    <div className='logInContainer'>
      <img src="Logo infocar.png" alt="Logo" />
      <div className='logInform'>
        <form onSubmit={handleLogin}>
          <input type='text' placeholder='Usuario' required />
          <input type='password' placeholder='Contraseña' required />
          <button type='submit' className='linkIniciarSesion'>Iniciar Sesión</button>
        </form>
        {error && <p className="error">{error}</p>}
        <p>¿No estás Registrado? <Link to={'/registro'}>Regístrate</Link></p>
      </div>
    </div>
  );
}

export default LogIn;
