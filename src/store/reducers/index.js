import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';
import reduxReducer from './reduxSlice';

const rootReducer = combineReducers({
  example: exampleReducer,
  redux: reduxReducer
});

export default rootReducer;
