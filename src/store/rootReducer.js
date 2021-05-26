import { combineReducers } from 'redux';

import worksReducer from './reducers/works/worksReducer';

const rootReducer = combineReducers({
  works: worksReducer,
});

export default rootReducer;
