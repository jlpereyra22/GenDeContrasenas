
import React, { useState } from 'react';
import "../Estilo/GeneradorDeContrasenas.css"

const GeneradorContraseñas = ({ agregarServicio }) => {
  const [contraseña, setContraseña] = useState('');
  const [servicio, setServicio] = useState('');
  const [email, setEmail] = useState('');

  const generarContraseña = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let nuevaContraseña = '';
    for (let i = 0; i < 12; i++) {
      nuevaContraseña += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setContraseña(nuevaContraseña);
    console.log('agregarServicio:', agregarServicio); 
  };

  const guardarServicio = () => {
    if (servicio && email && contraseña) {
      const nuevoServicio = { servicio, email, contraseña };
      agregarServicio(nuevoServicio); // Aquí es donde se llama a la función
      setServicio(''); // Limpiamos los campos
      setEmail('');
      setContraseña('');
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  return (
    <div className="generador-contraseñas">
      <h1>Generador de Contraseñas</h1>
      <input 
        type="text" 
        placeholder="Servicio" 
        value={servicio} 
        onChange={(e) => setServicio(e.target.value)} 
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="text" 
        value={contraseña} 
        readOnly 
      />
      <button onClick={generarContraseña}>Generar Contraseña</button>
      <button onClick={guardarServicio}>Guardar Servicio</button>
    </div>
  );
};

export default GeneradorContraseñas;
