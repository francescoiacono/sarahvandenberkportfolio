import * as actionTypes from './worksTypes';

const INITIAL_STATE = {
  works: [],
  loading: false,
  error: '',
  currentWork: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_WORKS:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.FETCH_WORKS_SUCCESS:
      return {
        ...state,
        works: action.payload,
        loading: false,
      };

    case actionTypes.FETCH_WORKS_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case actionTypes.SET_CURRENT_WORK:
      return {
        ...state,
        currentWork: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
