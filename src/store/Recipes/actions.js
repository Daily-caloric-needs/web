import { API } from '../../constants';
export const REQUEST_ADD_RECIPE_SUCCESS = 'RECIPES::REQUEST_ADD_RECIPE_SUCCESS';
export const REQUEST_ADD_RECIPE_FAILURE = 'RECIPES::REQUEST_ADD_RECIPE_FAILURE';
export const REQUEST_GET_RECIPE_SUCCESS = 'RECIPES::REQUEST_GET_RECIPE_SUCCESS';
export const REQUEST_GET_RECIPE_FAILURE = 'RECIPES::REQUEST_GET_RECIPE_FAILURE';
export const ADD_RECIPE = 'RECIPES::ADD_RECIPE';
export const GET_RECIPES = 'RECIPES::GET_RECIPES';

export const addRecipeSuccess = (recipe) => ({
  type: REQUEST_ADD_RECIPE_SUCCESS,
  payload: recipe,
});

export const addRecipeFailure = (error) => ({
  type: REQUEST_ADD_RECIPE_FAILURE,
  payload: error,
});

export const getRecipesSuccess = (recipes) => ({
  type: REQUEST_GET_RECIPE_SUCCESS,
  payload: recipes,
});

export const getRecipesFailure = (error) => ({
  type: REQUEST_GET_RECIPE_FAILURE,
  payload: error,
});

export const getRecipes = () => async (dispatch) => {
  try {
    const urlFetch = API + '/recipes';

    const response = await fetch(urlFetch);

    if (!response.ok) throw new Error('Ошибка: "Recipes service not worked"');

    const result = await response.json();
    dispatch(getRecipesSuccess(result));
    return result;
  } catch (err) {
    dispatch(getRecipesFailure(err));
  }
};

export const addRecipeToServer =
  ({ recipe, token }) =>
  async (dispatch) => {
    try {
      const urlFetch = API + '/recipes';

      const response = await fetch(urlFetch, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': '*',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify(recipe),
      });

      if (!response.ok) throw new Error('Ошибка: "Recipes service not worked"');

      const result = await response.json();
      dispatch(addRecipeSuccess(result));
      return result;
    } catch (err) {
      dispatch(addRecipeFailure(err));
    }
  };
