const initialState = {
	Breakfast: [],
	Lunch: [],
	Dinner: [],
	Snack: [],
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'ADD_DISH':
			return { ...state, [payload.mealName]: [...state[payload.mealName], payload] };
		case 'DELETE_DISH':
			return { ...state, [payload.mealName]: state[payload.mealName].filter((dish) => dish.id !== payload.id) };
		case 'CHANGE_COUNT_DISH':
			return { ...state, [payload.mealName]: [...payload.data] };
		default:
			return state;
	}
};

export default reducer;

// структура store {meal1 : [{продукт1}, {продукт2}, {продукт3}], meal2 : [{продукт1}, {продукт2}, {продукт3}]}
