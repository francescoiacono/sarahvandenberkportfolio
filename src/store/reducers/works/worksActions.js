import * as actionTypes from './worksTypes';
import axios from 'axios';

export const fetchWorks = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.FETCH_WORKS });
    axios
      .get(
        'https://sarahv-portfolio-default-rtdb.europe-west1.firebasedatabase.app/works.json'
      )
      .then((res) => {
        const arr = res.data[Object.keys(res.data)];
        dispatch({ type: actionTypes.FETCH_WORKS_SUCCESS, payload: arr });
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.FETCH_WORKS_FAIL,
          payload: error,
        });
      });
  };
};

export const setCurrentWork = (currentWork) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.SET_CURRENT_WORK, payload: currentWork });
  };
};
