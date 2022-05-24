import styled from '@emotion/styled';
import { Grid, Typography } from '@mui/material';
import { DishCounter } from '../DishCounter/DishCounter';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const RemoveButton = styled(RemoveCircleIcon)(({ theme }) => ({
  cursor: 'pointer',
  position: 'absolute',
  top: -10,
  right: -5,
  color: theme.palette.error.main,
}));

const CssGrid = styled(Grid)(({ theme }) => ({
  border: '1px solid ' + theme.palette.primary.main,
  borderRadius: '5px',
}));

export const ProductItem = ({
  product,
  del,
  changeCount,
  addCount,
  delCount,
}) => {
  return (
    <CssGrid item xs={6} sx={{ p: 1, position: 'relative' }}>
      <Typography textAlign="center" variant="subtitle1">
        {product.name}
      </Typography>
      <DishCounter
        count={product.count}
        validationCount={(count) => changeCount(count, product.id)}
        increment={addCount}
        decrement={delCount}
      />
      <RemoveButton onClick={del}>
        <RemoveCircleIcon />
      </RemoveButton>
    </CssGrid>
  );
};
