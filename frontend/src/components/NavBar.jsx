import "../css/NavBar.css";
import { Link } from "react-router-dom";

function NavBar({ onClose }) {
  const usuario = JSON.parse(localStorage.getItem("personaEnSesion"));

  return (
    <div className="navBarContainer">
      <div className="navBarHeader">
        <div className="buttonHeader">
          <button onClick={onClose}>X</button> 
        </div>
        <div className="userHeader">
          <p className="usuarioEnSesion">{usuario}</p>
        </div>
      </div>
      <div className="navBarOptions">
        <div className="opcion">
          <img src="./perfil.webp" alt="perfil" />
          <Link to={"/miPerfil"} className="opcionLink">Mi Perfil</Link> 
        </div>
        <hr />
        <div className="opcion">
          <img src="./home.jpg" alt="home" />
          <Link to={"/home"} className="opcionLink">Home</Link> 
        </div>
        <hr />
        <div className="opcion">
          <img src="./cerrarSesion.jpg" alt="cerrar Sesión" />
          <Link to={"/"} className="opcionLink">Cerrar Sesión</Link> 
        </div>
        <hr />
      </div>
    </div>
  );
}

export default NavBar;
