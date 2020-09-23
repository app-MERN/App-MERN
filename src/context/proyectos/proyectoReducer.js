import { FORMULARIO_PROYECTO, GET_PROYECTO } from '../../types';

export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: true,
      };

    case GET_PROYECTO:
      return {
        ...state,
        proyecto: action.payload,
      };
    default:
      return state;
  }
};
