import React, { useReducer } from 'react'
import TareaContext from './tareaContext'
import TareaReducer from './tareaReducer'

import {
  TAREAS_PROYECTO,
  ADD_TAREA,
} from '../../types'

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
    tareasproyecto: null,
  }

  const [state, dispatch] = useReducer(TareaReducer, initialState)

  const getTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    })
  }

  const addTarea = (tarea) => {
    dispatch({
      type: ADD_TAREA,
      payload: tarea,
    })
  }

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        getTareas,
        addTarea,
      }}
    >
      { props.children }
    </TareaContext.Provider>
  )
}

export default TareaState
