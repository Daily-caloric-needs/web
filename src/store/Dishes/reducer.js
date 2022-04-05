import { REQUEST_STATUS } from '../../constants';
import {
  ADD_DISH,
  ADD_DISH_COUNT,
  DELETE_DISH,
  DELETE_DISH_COUNT,
  REQUEST_DISHES_FILURE,
  REQUEST_DISHES_LOADING,
  REQUEST_DISHES_SUCCESS,
} from './actions';

const initialState = {
  dishes: [],
  dishesVariants: [],
  request: {
    status: REQUEST_STATUS.CREATED,
    error: '',
  },
};

export const dishesReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_DISHES_LOADING:
      return {
        ...state,
        request: {
          ...state.REQUEST_STATUS,
          status: REQUEST_STATUS.LOADING,
        },
      };
    case REQUEST_DISHES_FILURE:
      return {
        ...state,
        request: {
          error: payload,
          status: REQUEST_STATUS.FAILURE,
        },
      };
    case REQUEST_DISHES_SUCCESS:
      return {
        ...state,
        dishesVariants: payload,
        request: {
          ...state.REQUEST_STATUS,
          status: REQUEST_STATUS.SUCCESS,
        },
      };
    case ADD_DISH:
      return { ...state, dishes: [...state.dishes, payload] };
    case DELETE_DISH:
      return {
        ...state,
        dishes: state.dishes.filter((dish) => dish.id !== payload),
      };
    case ADD_DISH_COUNT:
      const updatedDishes = state.dishes.map((dish) => {
        if (dish.id === payload) dish.count++;
        return dish;
      });
      return {
        ...state,
        dishes: [...updatedDishes],
      };
    case DELETE_DISH_COUNT:
      const newDishes = state.dishes.map((dish) => {
        if (dish.id === payload) {
          if (dish.count > 1) {
            dish.count--;
          }
        }
        return dish;
      });
      return {
        ...state,
        dishes: [...newDishes],
      };
    default:
      return state;
  }
};
