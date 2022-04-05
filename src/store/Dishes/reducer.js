import { REQUEST_STATUS } from '../../constants';
import {
  REQUEST_DISHES_FILURE,
  REQUEST_DISHES_LOADING,
  REQUEST_DISHES_SUCCESS,
} from './actions';

const initialState = {
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
    default:
      return state;
  }
};
