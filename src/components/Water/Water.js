import React from 'react';
import './style.scss';
import LinearProgress from "@mui/material/LinearProgress";
import { Button } from '@mui/material';

export const Water = () => {
    const [progress, setProgress] = React.useState(0);

    const addWater = ()=>{
        setProgress(progress + 250);
    }
  
    return (
      <div className='water'>
          <h2 className='water__text'>Выпито воды за день: <span>{ progress } / 2000ml</span></h2>
          <Button onClick={ addWater }>+250ml</Button>
        <LinearProgress className='water__progress' variant='determinate' value={(progress*100)/2000} > {(progress*100)/2000}% </LinearProgress>
      </div>
    );
}