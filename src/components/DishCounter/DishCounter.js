import { IconButton, TextField, InputAdornment } from '@mui/material';
import styled from '@emotion/styled';
import './style.scss';

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  cursor: 'pointer',
  width: 40,
  height: 30,
  margin: 10,
  alignSelf: 'flex-end',
  justifyContent: 'center',
  '& .MuiSvgIcon-root': {
    color: theme.palette.text.white,
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));

export const DishCounter = ({ count, validationCount, increment, decrement }) => {
  const validCount = String(count).replace(/^0+./, "");
  return (
    <div className="counter">
      <CustomIconButton onClick={decrement}>
        <span className='counter__decrement'>-100</span>
      </CustomIconButton>
      <TextField 
        id="outlined-start-adornment"
        sx={{ width: '95px' }}
        InputProps={{
          endAdornment: <InputAdornment position="end"><span className='counter__gram'>гр.</span></InputAdornment>,
        }}
        type="number"
        size="small"
        value={validCount}
        onChange={(e) => validationCount(e.target.value)}
      />
      <CustomIconButton onClick={increment}>
        <span className='counter__increment'>+100</span>
      </CustomIconButton>
    </div>
  );
};
