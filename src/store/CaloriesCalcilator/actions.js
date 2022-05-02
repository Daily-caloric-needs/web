export const NORM_NUTRIENTS = "CALORIES::NORM_NUTRIENTS";
export const NORM_WATER_OF_DAY ="WATER::NORM_WATER_OF_DAY";

export const normNutrients = (calorieNorm) => ({
   type: NORM_NUTRIENTS,
   payload: calorieNorm
})

export const waterNormOFDay = (waterNorm) => ({
   type: NORM_WATER_OF_DAY,
   payload: waterNorm
})