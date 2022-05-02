import { NORM_NUTRIENTS } from './actions';
import { NORM_WATER_OF_DAY } from './actions'

   export const defaultValues = {
      calorieNorm: 0,
      waterNorm: 0
   };

export const normNutrientsReducer = (state = defaultValues, {type, payload}) => {
   switch (type) {
      case NORM_NUTRIENTS: 
         return {
            ...state, 
            calorieNorm: payload
         };
      case NORM_WATER_OF_DAY:
         return {
            ...state,
            waterNorm: payload
         }
         default:
            return state;
   }
};