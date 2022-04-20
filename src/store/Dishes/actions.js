import { API } from '../../constants';
export const REQUEST_DISHES_LOADING = 'DISHES::REQUEST_DISHES_LOADING';
export const REQUEST_DISHES_FILURE = 'DISHES::REQUEST_DISHES_FAILURE';
export const REQUEST_DISHES_SUCCESS = 'DISHES::REQUEST_DISHES_SUCCESS';
export const REQUEST_ADD_DISH = 'DISHES::REQUEST_ADD_DISH';
export const REQUEST_ADD_DISH_SUCCESS = 'DISHES::REQUEST_ADD_DISH_SUCCESS';
export const REQUEST_ADD_DISH_FAILURE = 'DISHES::REQUEST_ADD_DISH_FAILURE';

export const getDishesLoading = () => ({
  type: REQUEST_DISHES_LOADING,
});

export const getDishesFailure = (error) => ({
  type: REQUEST_DISHES_FILURE,
  payload: error,
});

export const getDishesSuccess = (dishes) => ({
  type: REQUEST_DISHES_SUCCESS,
  payload: dishes,
});

export const getDishes = () => async (dispatch) => {
  dispatch(getDishesLoading());

  try {
    const urlFetch = API + 'products';

    const response = await fetch(urlFetch);

    if (!response.ok) throw new Error('Ошибка: "Dishes service not worked"');

    const result = await response.json();
    dispatch(getDishesSuccess(result));
  } catch (err) {
    dispatch(getDishesFailure(err));
  }
};

export const addDishSuccess = (dish) => ({
  type: REQUEST_ADD_DISH_SUCCESS,
  payload: dish,
});

export const addDishFailure = (error) => ({
  type: REQUEST_ADD_DISH_FAILURE,
  payload: error,
});

export const addDishToServer = (newDish) => async (dispatch) => {
  try {
    const urlFetch = API + 'add-product';

    const response = await fetch(urlFetch, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
      },
      body: JSON.stringify(newDish),
    });

    if (!response.ok) throw new Error('Ошибка: "Dishes service not worked"');

    const result = await response.json();
    dispatch(addDishSuccess(result));
    return result;
  } catch (err) {
    dispatch(addDishFailure(err));
  }
};
