import { useState } from "react";
import React, { useState } from 'react';

const NuevoProyecto = () => {

  const [proyecto, setProyecto] = useState({
    nombre: '',
  })

  const {nombre} = proyecto

  const handleChangeProyecto = (params) => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value
    })
  }
  

  return (
    <div>
      <button
        type='button'
        className='btn btn-block btn-primario'
      >
        Nuevo Proyecto
      </button>

      <form
        className='formulario-nuevo-proyecto'
      >
        <input
          type='text'
          className='input-text'
          name='nombre'
          value={nombre}
          placeholder='Nombre Proyecto'
          onChange={handleChangeProyecto}
        />

        <input
          type='submit'
          className='btn btn-primario btn-block'
          value='Agregar Proyecto'
        />
      </form>
    </div>
  );
};

export default NuevoProyecto;
