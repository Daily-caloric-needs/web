import { applyMiddleware, createStore } from 'redux';
import { dishesReduser } from './Dishes/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// composeWithDevTools - devTools for Redux in Chrome
const store = createStore(
  dishesReduser,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
