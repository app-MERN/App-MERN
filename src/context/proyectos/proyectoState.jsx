import React, { useReducer } from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO } from '../../types';

const ProyectoState = (props) => {
  const initialState = {
    proyecto: [
      { id: 1, nombre: 'Tienda Virtual' },
      { id: 2, nombre: 'Intranet' },
      { id: 3, nombre: 'Diseño de sitio Web' },
      { id: 4, nombre: 'MERN' },
    ],
    formulario: false,
  };

  //  Dispatch para ejecutar las opciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  const mostrarFormulario = () => {
    dispatch({ type: FORMULARIO_PROYECTO });
  };

  return (
    <proyectoContext.Provider
      value={{
        proyecto: state.proyecto,
        formulario: state.formulario,
        mostrarFormulario,
      }}
    >
      { props.children }
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
