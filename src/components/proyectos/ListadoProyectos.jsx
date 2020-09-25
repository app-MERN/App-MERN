import React, { useContext, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext'

const ListadoProyectos = () => {
  const proyectosContext = useContext(proyectoContext)
  const { proyecto, getProyecto } = proyectosContext

  useEffect(() => {
    getProyecto()
    // eslint-disable-next-line
  }, [])

  if (proyecto.length === 0) return <p>No hay Proyectos o comienza creando uno</p>

  return (
    <div>
      <ul
        className='listado-proyectos'
      >
        <TransitionGroup>
          { proyecto.map((proyect) => (
            <CSSTransition
              key={proyect.id}
              timeout={400}
              classNames='proyecto'
            >
              <Proyecto
                proyecto={proyect}
              />
            </CSSTransition>
          )) }
        </TransitionGroup>
      </ul>
    </div>
  )
}

export default ListadoProyectos
