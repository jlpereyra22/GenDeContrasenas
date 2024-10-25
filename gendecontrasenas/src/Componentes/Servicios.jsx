import React from 'react';
import "../Estilo/GeneradorDeContrasenas.css";

const Servicios = ({ contraseñasGuardadas }) => {
  return (
    <div className="servicios">
      <h2>Servicios Guardados</h2>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Servicio</th>
            <th>Email</th>
            <th>Contraseña</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {contraseñasGuardadas.map((item, index) => (
            <tr key={index}>
              <td>{item.servicio}</td>
              <td>{item.email}</td>
              <td>{item.contraseña}</td>
              <td>
                <button className="btn btn-outline-info btn-sm">
                  <i className="fa fa-copy"></i> Copiar Email
                </button>
                <button className="btn btn-outline-warning btn-sm" style={{ marginLeft: '5px' }}>
                  <i className="fa fa-copy"></i> Copiar Contraseña
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Servicios;
