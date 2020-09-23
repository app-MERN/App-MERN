import { FORMULARIO_PROYECTO, GET_PROYECTO, ADD_PROYECTO } from '../../types'

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
      }

    default:
      return state
  }
}
