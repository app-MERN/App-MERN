import React, { useContext } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  if (proyecto.length === 0) return null;

  return (
    <div>
      <ul
        className='listado-proyectos'
      >
        { proyecto.map((proyect) => {
          return (
            <Proyecto
              key={proyect.id}
              proyecto={proyect}
            />
          );
        }) }
      </ul>
    </div>
  );
};

export default ListadoProyectos;
