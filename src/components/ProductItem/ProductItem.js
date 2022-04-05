import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import { ProductCounter } from '../ProductCounter/ProductCounter';
import './style.scss';

const RemoveButton = styled(Button)(({ theme }) => ({
  margin: 5,
}));

export const ProductItem = ({ product, del, addCount, delCount }) => {
  return (
    <div className="product">
      <Typography variant="h6">{product.name}</Typography>
      <Typography variant="subtitle2">Kcal: {product.calories}</Typography>
      <div className="product__info">
        <Typography variant="caption">f: {product.fat}</Typography>
        <Typography variant="caption">c: {product.carbohydrates}</Typography>
        <Typography variant="caption">p: {product.proteins}</Typography>
      </div>
      <ProductCounter
        count={product.count}
        increment={addCount}
        decrement={delCount}
      />
      <RemoveButton variant="contained" onClick={del}>
        Remove
      </RemoveButton>
    </div>
  );
};
