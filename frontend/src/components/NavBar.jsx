import "../css/NavBar.css";
import { Link } from "react-router-dom";
function NavBar() {
  const usuario = JSON.parse(localStorage.getItem("personaEnSesion"));
  return (
    <div className="navBarContainer">
      <div className="navBarHeader">
        <div className="buttonHeader">
          <button>X</button>
        </div>
        <div className="userHeader">
          <p className="usuarioEnSesion">{usuario}</p>
        </div>
      </div>
      <div className="navBarOptions">
        <div className="opcion">
          <img src="./perfil.webp" alt="perfil" />
          <Link to={"/logIn"} className="opcionLink">Mi Perfil</Link>
        </div>
        <hr />
        <div className="opcion">
          <img src="./home.jpg" alt="home" />
          <Link to={"/logIn"} className="opcionLink">Home</Link>
        </div>
        <hr />
        <div className="opcion">
        <img src="./cerrarSesion.jpg" alt="cerrar Sesión" />
        <Link to={"/logIn"} className="opcionLink">Cerrar Sesión</Link>
        </div>
        <hr /> 
      </div>
    </div>
  );
}

export default NavBar;
