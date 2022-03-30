import { ADD_PRODUCTS } from "./actions";

const initalState = {
   foods: [
      // calories, food, amount
   ]
};

export const productsReducer = (state = initalState, { type, payload }) => {
   switch (type) {
      case ADD_PRODUCTS: {
         return {
            ...state,
            foods: [...state.foods, { id: `food-${Date.now()}`, name: payload }],
         };
      }
      default:
         return state;
   }
};