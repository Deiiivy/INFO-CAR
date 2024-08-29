import React from 'react'
import '../css/RegisterVehicle.css'

function RegisterVehicle() {
    const usuarioEnSesion = JSON.parse(localStorage.getItem("personaEnSesion"));
    console.log(usuarioEnSesion);
  
    const personaData = JSON.parse(localStorage.getItem("personaData")) || {};
    const perfil = personaData[usuarioEnSesion];

    const fecha = new Date(perfil.fechaIngreso).toLocaleString()
    const kilometraje = perfil.kilometraje
    const galones = perfil.galones
  return (
    <div className='RegisterVehicle'>
        <div className='header-register'>
            <h3 className='h3-header'>Registro del vehiculo</h3>
        </div>

        <div className='body-container-register'>
            <div className='box-body-1'>
                <p className='title-register'>Kilometraje del Vehículo</p>
                <p className='estadisticas'>{kilometraje}</p>
            </div>

            <div className='box-body-2'>
                <p className='title-register'>Galones Totales</p>
                <p className='estadisticas'>{galones}</p>
            </div>

            <div className='box-body-3'> 
                <p className='title-register'>Ultimo diagnostico</p>
                <p className='estadisticas'>{fecha}</p>
            </div>

        </div>
    </div>
  )
}

export default RegisterVehicle