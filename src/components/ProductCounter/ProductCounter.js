import { IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import AddIcon from '@mui/icons-material/Add';
import './style.scss';

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  cursor: 'pointer',
  width: 40,
  height: 40,
  margin: 10,
  alignSelf: 'flex-end',
  '& .MuiSvgIcon-root': {
    color: theme.palette.text.white,
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));

export const ProductCounter = ({ count, increment, decrement }) => {
  return (
    <div className="counter">
      <CustomIconButton onClick={decrement}>
        <RemoveIcon />
      </CustomIconButton>
      <Typography variant="h6">{count}</Typography>
      <CustomIconButton onClick={increment}>
        <AddIcon />
      </CustomIconButton>
    </div>
  );
};
