export const DELETE_TOTAL_CALORIES = 'DELETE_TOTAL_CALORIES'

export const deleteCalories = (data) => ({
   type: DELETE_TOTAL_CALORIES,
   payload: data,
});