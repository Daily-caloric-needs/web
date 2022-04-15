import { AMOUNT_NUTRIENTS_FROM_MEAL, AMOUNT_NUTRIENTS_FROM_TODAY } from './actions';

const initialState = {
	breakfast: {},
	lunch: {},
	dinner: {},
	snack: {},
   totalForToday: {},
	normalForToday: 2300
};

export const amountNutrientsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case AMOUNT_NUTRIENTS_FROM_MEAL:
			return {
				...state,
				[payload.mealName]: payload.nutrients,
			};
		case AMOUNT_NUTRIENTS_FROM_TODAY:
			return {
				...state,
				totalForToday: payload,
			};
		default:
			return state;
	}
};
