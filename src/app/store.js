import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import calories from '../store/calories';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    calories: calories
  },

});
