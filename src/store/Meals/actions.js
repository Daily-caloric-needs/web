export const ADD_DISH_TO_MEAL = 'MEALS::ADD_DISH_TO_MEAL';
export const DELETE_DISH_FROM_MEAL = 'MEALS::DELETE_DISH_FROM_MEAL';
export const CHANGE_DISH_FROM_MEAL = 'MEALS::CHANGE_DISH_FROM_MEAL';

export const addDishToMeal = (newDish, mealName) => ({
  type: ADD_DISH_TO_MEAL,
  payload: { newDish, mealName },
});

export const deleteDishFromMeal = (id, mealName) => ({
  type: DELETE_DISH_FROM_MEAL,
  payload: { id, mealName },
});

export const changeDishFromMeal = (updatedDishes, mealName) => ({
  type: CHANGE_DISH_FROM_MEAL, 
  payload: { updatedDishes, mealName },
});
