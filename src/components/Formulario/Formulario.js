import React, { useState } from 'react';
import "./Formulario.css";

const Formulario = ({ nuevoUsuario }) => {

  const [datosUsuario, setDatosUsuario] = useState(initialState());
  const [error, setError] = useState(null);

  const { nombre, apellido } = datosUsuario;

  const handleChange = e => {
    setDatosUsuario(() => ({
      ...datosUsuario,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(nombre === '' || apellido === '') {
      setError('Faltan campos obligatorios');
      setTimeout(() => {
        setError(null);
      }, 3000);
      return;
    }
    nuevoUsuario(datosUsuario);
    setDatosUsuario(initialState());
  }

  return ( 
    <div className="Formulario">
      <form onSubmit={handleSubmit}>
        <label>Nombre</label><br/>
        <input
          type='text'
          name="nombre"
          value={nombre}
          onChange={handleChange}
        /><br/>

        <label>Apellido</label><br/>
        <input
          type='text'
          name="apellido" 
          value={apellido} 
          onChange={handleChange}
        /><br/>
        
        <div>
          <button type='submit'>Guardar</button>
        </div>
        {
          error && <p>{error}</p>
        }
      </form>
    </div>
  );
}
 
export default Formulario;

const initialState = () => ({
  nombre: '',
  apellido: '',
})
