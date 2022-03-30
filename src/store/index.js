import {createStore} from 'redux';

import { productsReducer } from './products/reducer'

export const store = createStore(productsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const products = [
   // calories, food, amount
   { calories: 89, product: 'Banana', amount: 1},
   { calories: 59, product: 'Yogurt', amount: 1},
   { calories: 52, product: 'Apple', amount: 1},
   { calories: 502, product: 'Biscuit', amount: 1 },
]