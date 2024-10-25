

import React, { useState, useEffect } from 'react';
import GeneradorContraseñas from './Componentes/GeneradorDeContrasenas';
import Servicios from "./Componentes/Servicios";

const App = () => {
  const [contraseñasGuardadas, setContraseñasGuardadas] = useState([]);

  useEffect(() => {
    // Cargar los servicios del localStorage al iniciar la aplicación
    const serviciosGuardados = JSON.parse(localStorage.getItem('servicios')) || [];
    setContraseñasGuardadas(serviciosGuardados);
  }, []);

  const agregarServicio = (nuevoServicio) => {
    const nuevosServicios = [...contraseñasGuardadas, nuevoServicio];
    setContraseñasGuardadas(nuevosServicios);
    localStorage.setItem('servicios', JSON.stringify(nuevosServicios)); // Guardar en localStorage
  };

  return (
    <div className="App">
      {/* Asegúrate de pasar agregarServicio como prop */}
      <GeneradorContraseñas agregarServicio={agregarServicio} />
      <Servicios contraseñasGuardadas={contraseñasGuardadas} />
    </div>
  );
};

export default App;
