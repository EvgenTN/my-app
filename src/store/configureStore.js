import { createStore } from 'redux';
import rootReducer from '../reducers';

export default (initialData) => {
  return createStore (rootReducer, initialData)
}