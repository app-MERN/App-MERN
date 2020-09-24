import React, { useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import TareaContext from '../../context/tareas/tareaContext'

const Proyecto = ({ proyecto }) => {
  const proyectosContext = useContext(proyectoContext)
  const { proyectoActual } = proyectosContext

  const tareasContext = useContext(TareaContext)
  const { getTareas } = tareasContext

  const seleccionarProyecto = (id) => {
    proyectoActual(id)
    getTareas(id)
  }

  return (
    <button
      type='button'
      className='btn btn-blank'
      onClick={() => seleccionarProyecto(proyecto.id)}
    >
      {proyecto.nombre}
    </button>
  )
}

export default Proyecto
