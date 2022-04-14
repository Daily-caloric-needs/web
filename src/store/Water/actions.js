export const DRINK_WATER = "DRINK_WATER";

export const drinkWater = (volume) => ({
  type: DRINK_WATER,
  payload: { volume: volume },
});
