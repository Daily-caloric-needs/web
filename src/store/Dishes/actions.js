export const ADD_DISH = 'DISHES::ADD_DISH';
export const DELETE_DISH = 'DISHES::DELETE_DISH';
export const ADD_DISH_COUNT = 'DISHES::ADD_DISH_COUNT';
export const DELETE_DISH_COUNT = 'DISHES::DELETE_DISH_COUNT';
export const REQUEST_DISHES_LOADING = 'DISHES::REQUEST_DISHES_LOADING';
export const REQUEST_DISHES_FILURE = 'DISHES::REQUEST_DISHES_FAILURE';
export const REQUEST_DISHES_SUCCESS = 'DISHES::REQUEST_DISHES_SUCCESS';

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
    const urlFetch = 'http://213.226.114.162/api/products';

    const response = await fetch(urlFetch);

    if (!response.ok) throw new Error('Dishes service not worked');

    const result = await response.json();
    console.log(result.data.length);
    dispatch(getDishesSuccess(result.data));
  } catch (err) {
    dispatch(getDishesFailure(err));
  }
};

export const addDishAction = (data) => ({
  type: ADD_DISH,
  payload: data,
});

export const deleteDishAction = (id) => ({
  type: DELETE_DISH,
  payload: id,
});

export const addDishCount = (id) => ({
  type: ADD_DISH_COUNT,
  payload: id,
});

export const deleteDishCount = (id) => ({
  type: DELETE_DISH_COUNT,
  payload: id,
});
