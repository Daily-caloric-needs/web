import "./style.scss";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { selectDailyVolume, selectWaterDrunk } from "./selectors";
import { useCallback } from "react";
import { drinkWater } from "./actions";
import { generateChartData } from "./utils";

ChartJS.register(ArcElement, Tooltip, Legend);

export const Water = () => {
  const drunkWater = useSelector(selectWaterDrunk);
  const dailyVolume = useSelector(selectDailyVolume);
  const dispatch = useDispatch();
  const addWaterHandler = useCallback(() => {
    dispatch(drinkWater(250));
  }, [dispatch]);

  const data = {
    labels: [],
    datasets: [
      {
        label: "Water chart",
        data: generateChartData(drunkWater, dailyVolume),
        backgroundColor: ["rgb(54, 162, 235)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 0.2)"],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };

  return (
    <Box className="water">
      <Typography align="center">
        <h2 className="water__text h2">
          Выпито воды за день: {drunkWater} из {dailyVolume}
        </h2>
      </Typography>
      <Pie data={data} />
      <Button onClick={addWaterHandler}>+250ml</Button>
    </Box>
  );
};
