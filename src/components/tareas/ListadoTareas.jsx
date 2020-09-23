import React, { useContext } from 'react'
import Tarea from './Tarea'
import proyectoContext from '../../context/proyectos/proyectoContext'

const ListadoTareas = () => {
  const proyectosContext = useContext(proyectoContext)
  const { proyectoz } = proyectosContext

  if (!proyectoz) return <h2>Selecciona un Proyecto</h2>

  const [proyectoActual] = proyectoz

  const tareasProyecto = [
    { nombre: 'Elegir Plataforma', estado: true },
    { nombre: 'Elegir Colores', estado: false },
    { nombre: 'Elegir Plataforma de Pago', estado: false },
    { nombre: 'Elegir Hosting', estado: true },
  ]

  return (
    <div>
      <h2>
        Proyecto:
        {proyectoActual.nombre}
      </h2>

      <ul className='listado-tareas'>
        { tareasProyecto.length === 0
          ? (<li><p>No hay Tareas</p></li>)
          : tareasProyecto.map((tarea) => (
            <Tarea
              tarea={tarea}
            />
          ))}
      </ul>

      <button
        type='button'
        className='btn btn-eliminar'
      >
        Eliminar Proyecto &times;
      </button>
    </div>
  )
}

export default ListadoTareas
