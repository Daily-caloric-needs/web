export const selectDishesFromMeal = (mealName) => (state) => state.meals[mealName];
export const selectAllDishes = () => (state) => state.meals;
