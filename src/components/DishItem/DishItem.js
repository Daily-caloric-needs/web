import { Typography } from '@mui/material';
import { DishCounter } from '../DishCounter/DishCounter';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import './style.scss';
import styled from '@emotion/styled';

const RemoveButton = styled(RemoveCircleIcon)(({ theme }) => ({
  cursor: 'pointer',
  position: 'absolute',
  top: -5,
  right: -5,
  color: theme.palette.error.main,
}));

export const DishItem = ({ dish, del, addCount, delCount }) => {
  return (
    <div className="dish">
      <Typography variant="h6">{dish.name}</Typography>
      <Typography variant="subtitle2">Kcal: {dish.calories}</Typography>
      <div className="dish__info">
        <Typography variant="caption">f: {dish.fat}</Typography>
        <Typography variant="caption">c: {dish.carbohydrates}</Typography>
        <Typography variant="caption">p: {dish.proteins}</Typography>
      </div>
      <DishCounter
        count={dish.count}
        increment={addCount}
        decrement={delCount}
      />
      <RemoveButton onClick={del}>
        <RemoveCircleIcon />
      </RemoveButton>
    </div>
  );
};
