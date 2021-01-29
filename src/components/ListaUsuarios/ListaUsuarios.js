import React from 'react';
import Usuario from './Usuario';

const ListaUsuarios = ({ usuarios, eliminarUsuario }) => {

  const mostrarUsuarios = () => {
    if(usuarios.length > 0) {
      return usuarios.map(usuario => (
        <Usuario 
          key={usuario.id}
          eliminarUsuario={eliminarUsuario}
          {...usuario}
        />
      ))
    } else {
      return <p>No hay usuarios en la lista</p>
    }
  }

  return ( 
    <div className="ListaUsuarios" style={{marginLeft: "115px"}}>
      {mostrarUsuarios()}
    </div>
  );
}
 
export default ListaUsuarios;