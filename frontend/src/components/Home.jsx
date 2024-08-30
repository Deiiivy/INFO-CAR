import React, { useState } from "react";
import FunctionCar from "./FunctionCar";
import { Link } from "react-router-dom";
import "../css/Home.css";
import RegisterVehicle from "./RegisterVehicle";
import NavBar from "./NavBar"; // Asegúrate de importar NavBar

function Home() {
  const [showNavBar, setShowNavBar] = useState(false);

  const handleMenuClick = () => {
    setShowNavBar((prevState) => !prevState);
  };
  const handleNavBarClose = () => {
    setShowNavBar(false);
  };

  return (
    <>
      <div>
        <div>{showNavBar && <NavBar onClose={handleNavBarClose} />}</div>
        <div className={`homeHeader ${showNavBar ? "opaque" : ""}`}>
          <button onClick={handleMenuClick}>
            <img src="./menu.png" className="menuLogo" alt="Menu" />
          </button>
          <img src="./Logo infocar.png" alt="Logo" />
        </div>
        <div className={`registerVehicle ${showNavBar ? "opaque" : ""}`}>
          <RegisterVehicle />
        </div>

        <div className={`home-container ${showNavBar ? "opaque" : ""}`}>
          <Link to={"/diagnostico"} className="function-car">
            <FunctionCar title="Diagnostico del Motor" />
          </Link>

          <Link to={"/bateria"} className="function-car">
            <FunctionCar title="Bateria" />
          </Link>

          <Link to={"/combustible"} className="function-car">
            <FunctionCar title="Combustible" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
