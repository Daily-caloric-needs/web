import { applyMiddleware, combineReducers, createStore } from 'redux';
import { dishesReduser } from './Dishes/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { mealsReducer } from './Meals/reducer';
import { amountNutrientsReducer } from './AmountNutrients/reducer';

// composeWithDevTools - devTools for Redux in Chrome
const store = createStore(
  combineReducers({
    dishes: dishesReduser,
    meals: mealsReducer,
    amountNutrients: amountNutrientsReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
