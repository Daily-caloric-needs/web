import { ADD_TOTAL_CALORIES, DELETE_TOTAL_CALORIES } from "./actions";

const initialState = {
   totalCalories: 0
};


const calories = (state = initialState, { type, payload }) => {
   switch (type) {
      case ADD_TOTAL_CALORIES:
         return { ...state, totalCalories: payload };
      case DELETE_TOTAL_CALORIES:
         return { ...state, totalCalories: payload };
      default:
         return state;
   }
};

export default calories;