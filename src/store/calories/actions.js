export const ADD_TOTAL_CALORIES = 'ADD_TOTAL_CALORIES';
export const DELETE_TOTAL_CALORIES = 'DELETE_TOTAL_CALORIES';

export const addTotalCalories = (data) => ({
   type: ADD_TOTAL_CALORIES,
   payload: data
});

export const deleteTotalCalories = (id) => ({
   type: DELETE_TOTAL_CALORIES,
   payload: id,
});
