
import React, { useState } from 'react';
import "../Estilo/GeneradorDeContrasenas.css"

const GeneradorContraseñas = () => {
  const [contraseña, setContraseña] = useState('');

  const generarContraseña = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let nuevaContraseña = '';
    for (let i = 0; i < 12; i++) {
      nuevaContraseña += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setContraseña(nuevaContraseña);
  };

  return (
    <div className="generador-contraseñas">
      <h1>Generador de Contraseñas</h1>
      <input type="text" value={contraseña} readOnly />
      <button onClick={generarContraseña}>Generar Contraseña</button>
    </div>
  );
};

export default GeneradorContraseñas;
