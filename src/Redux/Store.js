import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import pruductReducer from './Reducers/PruductReducer';

const store = createStore(pruductReducer, composeWithDevTools());

export default store;


