export const selectAmountNutrientsFromMeal = (mealName) => (state) => state.amountNutrients[mealName];
export const selectAmountNutrientsFromToday = () => (state) => state.amountNutrients.totalForToday;
export const selectAmountNutrientsNormalFromToday = () => (state) => state.amountNutrients.normalForToday;

