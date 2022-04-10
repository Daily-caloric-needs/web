export const AMOUNT_NUTRIENTS_FROM_MEAL = 'MEALS::AMOUNT_NUTRIENTS_FROM_MEAL';
export const AMOUNT_NUTRIENTS_FROM_TODAY = 'TODAY::AMOUNT_NUTRIENTS_FROM_TODAY';

export const amountNutrientsFromMeal = (nutrients, mealName) => ({
  type: AMOUNT_NUTRIENTS_FROM_MEAL,
  payload: {nutrients, mealName},
});

export const amountNutrientsFromToday = (nutrients) => ({
  type: AMOUNT_NUTRIENTS_FROM_TODAY,
  payload: nutrients,
});
