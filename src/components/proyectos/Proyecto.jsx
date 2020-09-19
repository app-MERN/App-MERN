import React from 'react';

const Proyecto = ({ proyecto }) => {
  return (
    <button
      type='button'
      className='btn btn-blank'
    >
      {proyecto.nombre}
    </button>
  );
};

export default Proyecto;
