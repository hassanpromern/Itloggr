import {
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECH_ERRORS,
  GET_TECHS,
} from "../actions/type";

const initialState = {
  techs: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false,
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter((tech) => tech.id !== action.payload),
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TECH_ERRORS:
      console.error(action.payload);
      return {
        ...state,
        error: action.paylaod,
        loading: false,
      };
    default:
      return state;
  }
};
