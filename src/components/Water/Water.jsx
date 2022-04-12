import './style.scss';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { selectDailyVolume, selectWaterDrunk } from './selectors';
import { useCallback } from 'react';
import { drinkWater } from './actions';
import { generateChartData } from './utils';
import { BsCupStraw, BsCup } from 'react-icons/bs';
import { GiWaterBottle  } from "react-icons/gi";

ChartJS.register(ArcElement, Tooltip, Legend);

export const Water = () => {
  const drunkWater = useSelector(selectWaterDrunk);
  const dailyVolume = useSelector(selectDailyVolume);
  const dispatch = useDispatch();
  const addWaterHandler = useCallback((value) => {
    dispatch(drinkWater(value));
  }, [dispatch]);

  const data = {
    labels: [],
    datasets: [
      {
        label: 'Water chart',
        data: generateChartData(drunkWater, dailyVolume),
        backgroundColor: ['rgb(54, 162, 235)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 0.2)'],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };

  return (
    <Box className="water">
      <Typography align="center">
          <span className='water__text'>Выпито воды за день: <br /> {drunkWater}мл из {dailyVolume}мл</span>
      </Typography>
      <Pie data={data} />
      <div className='water__buttons'>
      <Button onClick={()=>addWaterHandler(100)}><BsCup size="20" /><p>+100мл</p></Button>
      <Button onClick={()=>addWaterHandler(250)}><BsCup size="30" /><p>+250мл</p></Button>
      <Button onClick={()=>addWaterHandler(350)}><BsCupStraw size="45" /><p>+350мл</p></Button>
      <Button onClick={()=>addWaterHandler(500)}><GiWaterBottle size="60" /><p>+500мл</p></Button>
      </div>
    </Box>
  );
};
