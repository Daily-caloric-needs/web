export const AMOUNT_NUTRIENTS_FROM_MEAL = 'MEALS::AMOUNT_NUTRIENTS_FROM_MEAL';

export const amountNutrientsFromMeal = (nutrients, mealName) => ({
  type: AMOUNT_NUTRIENTS_FROM_MEAL,
  payload: {nutrients, mealName},
});