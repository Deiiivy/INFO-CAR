import "./Registro.css";

function Registro() {
  return (
    <div className="registroContainer">
      <img src="./Logo infocar.png" alt="" />
      <div className="registroForm">
        <p>Ingrese su Usuario:</p>
        <input type="text" placeholder="Usuario" required />
        <p>Ingrese su Contraseña:</p>
        <input type="password" placeholder="Contraseña" required />
        <p>Nombre del Vehículo:</p>
        <input type="text" placeholder="Nombre Vehículo"  required/>
        <p>Matricula ó placa del Vehículo:</p>
        <input type="text" placeholder="Matrícula Vehículo" required/>
        <p>Año del Vehículo:</p>
        <input type="number" placeholder="Modelo"required />
        <p>Corriente, Extra, Diésel:</p>
        <input type="text" placeholder="Tipo Gasolina" required/>
        <p>Cantidad de Galones Actuales:</p>
        <input type="number" placeholder="Galones" required/>
        <p>Kilometraje Total actual:</p>
        <input type="number" placeholder="Km/h" required/>


        <button onClick='../LogIn.jsx'>Registrarme</button>
        
      </div>
    </div>
  );
}

export default Registro;
