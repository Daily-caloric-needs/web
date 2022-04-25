import { ADD_DISH_TO_MEAL, CHANGE_DISH_FROM_MEAL, DELETE_DISH_FROM_MEAL } from './actions';

const initialState = {
	breakfast: [],
	lunch: [],
	dinner: [],
	snack: [],
};

export const mealsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_DISH_TO_MEAL:
			return {
				...state,
				[payload.mealName]: [...state[payload.mealName], payload.newDish],
			};
		case DELETE_DISH_FROM_MEAL:
			return {
				...state,
				[payload.mealName]: [...state[payload.mealName].filter((dish) => dish.id !== payload.id)],
			};
		case CHANGE_DISH_FROM_MEAL:
			return {
				...state,
				[payload.mealName]: [...payload.updatedDishes],
			};
		default:
			return state;
	}
};
