import { applyMiddleware, combineReducers, createStore } from 'redux';
import { dishesReduser } from './Dishes/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { mealsReducer } from './Meals/reducer';
import { amountNutrientsReducer } from './AmountNutrients/reducer';
import { userDataReducer } from './UserData/reducer';
import waterReducer from "../store/Water/reducer";
import { normNutrientsReducer } from './CaloriesCalcilator/reducer';

// composeWithDevTools - devTools for Redux in Chrome
const store = createStore(
  combineReducers({
    dishes: dishesReduser,
    meals: mealsReducer,
    water: waterReducer,
    amountNutrients: amountNutrientsReducer,
    normNutrients: normNutrientsReducer,
    userData: userDataReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
