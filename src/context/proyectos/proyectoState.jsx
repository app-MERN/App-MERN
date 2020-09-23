import React, { useReducer } from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO, GET_PROYECTO } from '../../types';

const ProyectoState = (props) => {
  const proyecto = [
    { id: 1, nombre: 'Tienda Virtual' },
    { id: 2, nombre: 'Intranet' },
    { id: 3, nombre: 'Diseño de sitio Web' },
    { id: 4, nombre: 'MERN' },
  ];

  const initialState = {
    proyecto: [],
    formulario: false,
  };

  //  Dispatch para ejecutar las opciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  const mostrarFormulario = () => {
    dispatch({ type: FORMULARIO_PROYECTO });
  };

  const getProyecto = () => {
    dispatch({
      type: GET_PROYECTO,
      payload: proyecto,
    });
  };

  return (
    <proyectoContext.Provider
      value={{
        proyecto: state.proyecto,
        formulario: state.formulario,
        mostrarFormulario,
        getProyecto,
      }}
    >
      { props.children }
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
