import { AMOUNT_NUTRIENTS_FROM_MEAL } from './actions';

const initialState = {
	breakfast: {},
	lunch: {},
	dinner: {},
	snack: {},
  total: {}
};

export const amountNutrientsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case AMOUNT_NUTRIENTS_FROM_MEAL:
			return {
				...state,
				[payload.mealName]: payload.nutrients,
			};
		default:
			return state;
	}
};
