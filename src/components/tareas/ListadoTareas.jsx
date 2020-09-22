import React from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {
  const tareasProyecto = [
    { nombre: 'Elegir Plataforma', estado: true },
    { nombre: 'Elegir Colores', estado: false },
    { nombre: 'Elegir Plataforma de Pago', estado: false },
    { nombre: 'Elegir Hosting', estado: true },
  ];

  return (
    <div>
      <h2>Proyecto: Tienda Virtual</h2>

      <ul className='listado-tareas'>
        { tareasProyecto.length === 0
          ? (<li><p>No hay Tareas</p></li>)
          : tareasProyecto.map((tarea) => {
            return (
              <Tarea
                tarea={tarea}
              />
            );
          })}
      </ul>

      <button
        type='button'
        className='btn btn-eliminar'
      >Eliminar Proyecto &times;</button>
    </div>
  );
};

export default ListadoTareas;
