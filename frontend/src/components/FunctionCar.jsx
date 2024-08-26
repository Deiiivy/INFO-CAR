import React from 'react'
import '../css/FunctionCar.css'

function FunctionCar({ title, img, url }) {
    return (
      <a href={url} className="function-car">
        <h2>{title}</h2>
      </a>
    );
  }
  
export default FunctionCar