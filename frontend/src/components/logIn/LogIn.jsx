
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './LogIn.css'

function LogIn() {

    return(
        <div className='logInContainer'>
            
            <img src="Logo infocar.png" alt="Logo" />
            <div className='logInform'>
                <input type='text' placeholder='Usuario' required/>
                <input type='password' placeholder='Contraseña' required/>
                <button>Iniciar Sesión</button>
                <p>¿No estas Registrado? <a href='/resgistro'>Registrarse</a></p>
            </div>
        </div>
    
    );
}

export default LogIn;