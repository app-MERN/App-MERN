import React, { useReducer } from 'react'
import { getId } from '../../utils'
import TareaContext from './tareaContext'
import TareaReducer from './tareaReducer'

import {
  TAREAS_PROYECTO,
  ADD_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
  LIMPIAR_TAREA,
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
    tareaseleccionada: null,
  }

  const [state, dispatch] = useReducer(TareaReducer, initialState)

  const getTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    })
  }

  const addTarea = (tarea) => {
    tarea.id = getId()
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

  const saveTareActual = (tareax) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tareax,
    })
  }

  const actualizartarea = (tarea) => {
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea,
    })
  }

  const limpiarTarea = () => {
    dispatch({ type: LIMPIAR_TAREA })
  }

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        tareaseleccionada: state.tareaseleccionada,
        getTareas,
        addTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        saveTareActual,
        actualizartarea,
        limpiarTarea,
      }}
    >
      { props.children }
    </TareaContext.Provider>
  )
}

export default TareaState
