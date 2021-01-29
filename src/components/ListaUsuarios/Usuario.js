import React from 'react';

const Usuario = ({ id, nombre, apellido, eliminarUsuario }) => {
  return ( 
    <div style={{display: "flex"}}>
      <li>{nombre} {apellido}</li>
      <button onClick={() => eliminarUsuario(id)}>Eliminar</button>
    </div>
  );
}
 
export default Usuario;