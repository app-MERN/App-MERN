import React, { useReducer } from 'react'
import TareaContext from './tareaContext'
import TareaReducer from './tareaReducer'

import { TAREAS_PROYECTO } from '../../types'

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
      { nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
      { nombre: 'Elegir Plataforma de Pago', estado: false, proyectoId: 3 },
      { nombre: 'Elegir Hosting', estado: true, proyectoId: 4 },
      { nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
      { nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
      { nombre: 'Elegir Plataforma de Pago', estado: false, proyectoId: 3 },
      { nombre: 'Elegir Plataforma', estado: true, proyectoId: 4 },
      { nombre: 'Elegir Colores', estado: false, proyectoId: 1 },
      { nombre: 'Elegir Plataforma de Pago', estado: false, proyectoId: 2 },
      { nombre: 'Elegir Plataforma', estado: true, proyectoId: 3 },
      { nombre: 'Elegir Colores', estado: false, proyectoId: 4 },
      { nombre: 'Elegir Plataforma de Pago', estado: false, proyectoId: 3 },
    ],
  }

  const [state, dispatch] = useReducer(TareaReducer, initialState)

  const getTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    })
  }

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        getTareas,
      }}
    >
      { props.children }
    </TareaContext.Provider>
  )
}

export default TareaState
