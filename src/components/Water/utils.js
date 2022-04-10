export const generateChartData = (drunkWater, dailyVolume) => {
  if (drunkWater > dailyVolume) {
    return [dailyVolume, 0];
  }
  return [drunkWater, dailyVolume - drunkWater];
};
