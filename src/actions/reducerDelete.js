import { DELETE_TOTAL_CALORIES } from "./deleteProduct";

const initalState = {
   calories: []
}

export const caloriesReducer = (state = initalState, { type, payload }) => {
   switch (type) {
      // eslint-disable-next-line no-lone-blocks
      case 'ADD_TOTAL_CALORIES': {
         return {
            ...state,
            totalCalories: payload
         }
      };
      // case DELETE_TOTAL_CALORIES: {
      //    const newProducts = state.calories.filter(({ id }) => id !== payload);
      //    return {
      //       ...state,
      //       calories: newProducts,
      //    };
      // };
      default:
         return state;
   }
}