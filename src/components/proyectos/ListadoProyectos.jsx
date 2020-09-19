import React from 'react';
import Proyecto from './Proyecto';

const ListadoProyectos = () => {
  const proyecto = [
    { nombre: 'Tienda Virtual' },
    { nombre: 'Intranet' },
    { nombre: 'Diseño de sitio Web' },
  ];

  return (
    <div>
      <ul
        className='listado-proyectos'
      >
        { proyecto.map((proyect) => {
          return (
            <Proyecto proyecto={proyect} />
          );
        }) }
      </ul>
    </div>
  );
};

export default ListadoProyectos;
