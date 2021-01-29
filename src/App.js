import React, { useState } from "react";
import Formulario from "./components/Formulario";
import ListaUsuarios from "./components/ListaUsuarios";

function App() {
  const [usuarios, setUsuarios] = useState(initialState());

  const nuevoUsuario = datosUsuario => {
    datosUsuario.id = new Date().getTime();
    const nuevoArreglo = [...usuarios, datosUsuario];
    setUsuarios(nuevoArreglo);
  }

  const eliminarUsuario = id => {
    const copiaUsuarios = [...usuarios];
    const arregloActualizado = copiaUsuarios.filter(usuario => usuario.id !== id);
    setUsuarios(arregloActualizado);
  }

  return (
    <div className="App" style={{display: "flex", width: "100%", justifyContent: "center", marginTop: "50px"}} >
      <Formulario 
        nuevoUsuario={nuevoUsuario}
      />
      <ListaUsuarios 
        usuarios={usuarios}
        eliminarUsuario={eliminarUsuario}
      />
    </div>
  );
}

export default App;


const initialState = () => []