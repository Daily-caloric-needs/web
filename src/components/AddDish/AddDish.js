import './style.scss';
import { v4 as uuid4 } from 'uuid';
import { useState } from 'react';
import {
  Button,
  TextField,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import styled from '@emotion/styled';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'coral',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'coral',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'coral',
    },
    '&:hover fieldset': {
      borderColor: 'coral',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'coral',
    },
  },
});

const CssButton = styled(Button)({
  border: '1px solid coral',
  color: 'coral',
  '&:hover': {
    boxShadow: '0 0 10px 5px rgba(255, 127, 80, 0.3)',
  },
});

const CssButtonCancel = styled(CssButton)({
  '&:hover': {
    backgroundColor: 'transparent',
  },
});

const CssButtonAdd = styled(CssButton)({
  '&:hover': {
    backgroundColor: 'coral',
    color: '#fff',
  },
});

export const AddDish = ({ add, mealName, close, title }) => {
  const [name, setName] = useState('');
  const [count, setCount] = useState(1);

  const changeCount = (e) => {
    if(e.target.value < 1){
      setCount(1);
    }else{
      setCount(+e.target.value)
    }
  };

  const changeName = (e) => {
    setName(e.target.value);
  };

  const addDish = (e) => {
    e.preventDefault();

    if (!name) return;

    // создание нового объекта с названием продукта и кол-ва для сохранения в store
    const newDish = {
      name,
      id: uuid4(),
      mealName: mealName,
      count: count,
    };

    add(newDish);
  };

  return (
    <>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <CssTextField
          autoFocus
          margin="dense"
          id="dash"
          label="Dish"
          type="text"
          fullWidth
          variant="outlined"
          sx={{ marginTop: '30px' }}
          value={name}
          onChange={changeName}
        />
        <CssTextField
          margin="dense"
          id="dash-count"
          label="Count"
          type="number"
          fullWidth
          variant="outlined"
          onChange={changeCount}
          value={count}
        />
      </DialogContent>
      <DialogActions>
        <CssButtonCancel onClick={close}>Cancel</CssButtonCancel>
        <CssButtonAdd onClick={addDish}>Add</CssButtonAdd>
      </DialogActions>
    </>
  );
};
