import { ADD_USER_DATA,  DELETE_USER_DATA, /*CHANGE_USER_DATA */ } from './actions';

const initialState = null;

export const userDataReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_USER_DATA:
			return 	payload;
		case DELETE_USER_DATA:
			return 	payload;
		// 	заготовка
		// case CHANGE_USER_DATA:
		// 	return {
		// 		...state,
		// 	};
		default:
			return state;
	}
};
