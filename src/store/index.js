import { createStore } from 'redux';
import reducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

// composeWithDevTools - devTools for Redux in Chrome
const store = createStore(reducer, composeWithDevTools());

export default store;