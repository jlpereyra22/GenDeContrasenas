
import React, { useState } from 'react';
import "../Estilo/GeneradorDeContrasenas.css"

const GeneradorContraseñas = () => {
  const [contraseña, setContraseña] = useState('');

  const generarContraseña = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let nuevaContraseña = '';
    for (let i = 0; i < 18; i++) {
      nuevaContraseña += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setContraseña(nuevaContraseña);
  };

  return (
    <div className="generador-contraseñas">
      <h1 className='text-center
      '>Generador de Contraseñas</h1>
      <input type="text" value={contraseña} readOnly className="form-control form-control-lg input-contraseña text-center" />
      <button onClick={generarContraseña} className="btn-generar">Generar Contraseña</button>
    </div>
  );
};

export default GeneradorContraseñas;
