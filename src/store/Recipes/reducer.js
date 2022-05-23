import {
  REQUEST_ADD_RECIPE_SUCCESS,
  REQUEST_GET_RECIPE_SUCCESS,
} from './actions';

const initialState = [];

export const recipesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_ADD_RECIPE_SUCCESS:
      return [...state, payload];
    case REQUEST_GET_RECIPE_SUCCESS:
      return payload;
    default:
      return state;
  }
};
