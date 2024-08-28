import React from 'react'
import '../css/RegisterVehicle.css'

function RegisterVehicle() {
  return (
    <div className='RegisterVehicle'>
        <div className='header-register'>
            <h3 className='h3-header'>Registración del vehiculo</h3>
            <button className='btn-conexion'>Ver más</button>
        </div>

        <div className='body-container-register'>
            <div className='box-body-1'>
                <p className='title-register'>Promedio Kilometraje</p>
                <p className='estadisticas'>---</p>
                <p>Km</p>
            </div>

            <div className='box-body-2'>
                <p className='title-register'>Promedio tiempo de conduccion</p>
                <p className='estadisticas'>---</p>
                <p>Hora:Min</p>
            </div>

            <div className='box-body-3'> 
                <p className='title-register'>Ultimo diagnostico</p>
                <p className='estadisticas'>---</p>
            </div>

        </div>
    </div>
  )
}

export default RegisterVehicle