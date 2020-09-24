import React, { useReducer } from 'react'
import TareaContext from './tareaContext'
import TareaReducer from './tareaReducer'

import {
  TAREAS_PROYECTO,
  ADD_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
} from '../../types'

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { id: 1, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
      { id: 2, nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
      { id: 3, nombre: 'Elegir Plataforma de Pago', estado: false, proyectoId: 3 },
      { id: 4, nombre: 'Elegir Hosting', estado: true, proyectoId: 4 },
      { id: 5, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
      { id: 6, nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
      { id: 7, nombre: 'Elegir Plataforma de Pago', estado: false, proyectoId: 3 },
      { id: 8, nombre: 'Elegir Plataforma', estado: true, proyectoId: 4 },
      { id: 9, nombre: 'Elegir Colores', estado: false, proyectoId: 1 },
      { id: 10, nombre: 'Elegir Plataforma de Pago', estado: false, proyectoId: 2 },
      { id: 11, nombre: 'Elegir Plataforma', estado: true, proyectoId: 3 },
      { id: 12, nombre: 'Elegir Colores', estado: false, proyectoId: 4 },
      { id: 13, nombre: 'Elegir Plataforma de Pago', estado: false, proyectoId: 3 },
    ],
    tareasproyecto: null,
    errortarea: false,
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

  const validarTarea = () => {
    dispatch({ type: VALIDAR_TAREA })
  }

  const eliminarTarea = (id) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    })
  }

  const cambiarEstadoTarea = (tareax) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tareax,
    })
  }

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        getTareas,
        addTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
      }}
    >
      { props.children }
    </TareaContext.Provider>
  )
}

export default TareaState
