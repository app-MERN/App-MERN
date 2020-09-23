import {
  FORMULARIO_PROYECTO,
  GET_PROYECTO,
  ADD_PROYECTO,
  VALIDAR_FORMULARIO,
} from '../../types'

export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: true,
      }

    case GET_PROYECTO:
      return {
        ...state,
        proyecto: action.payload,
      }

    case ADD_PROYECTO:
      return {
        ...state,
        proyecto: [
          ...state.proyecto,
          action.payload,
        ],
        formulario: false,
        errorformulario: false,
      }

    case VALIDAR_FORMULARIO:
      return {
        ...state,
        errorformulario: true,
      }

    default:
      return state
  }
}
