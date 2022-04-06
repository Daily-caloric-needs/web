import { v4 as uuid4 } from 'uuid';
import { useState } from 'react';
import {
  Button,
  TextField,
  DialogActions,
  DialogContent,
  DialogTitle,
  createFilterOptions,
  Autocomplete,
  DialogContentText,
  Typography,
} from '@mui/material';
import { CssDialog } from '../Modal/Modal';
import styled from '@emotion/styled';
import { getDishesVariants } from '../../store/Dishes/selectors';
import { useSelector } from 'react-redux';
import { DishCounter } from '../DishCounter/DishCounter';
import './style.scss';

const CssTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    color: theme.palette.primary.main,
  },
  '& label.Mui-focused': {
    color: theme.palette.primary.main,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: theme.palette.primary.main,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      color: theme.palette.text.primary,
      borderColor: theme.palette.primary.main,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const CssAutocomplete = styled(Autocomplete)(({ theme }) => ({
  marginTop: 20,
  marginBottom: 10,

  '& .MuiInputLabel-root': {
    color: theme.palette.primary.main,
  },
  '& label.Mui-focused': {
    color: theme.palette.primary.main,
  },
  '& .MuiOutlinedInput-root': {
    '& input': {
      color: theme.palette.text.black,
    },
    '& fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const CssButton = styled(Button)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  '&:hover': {
    boxShadow: `0 0 10px 1px ${theme.palette.primary.main}`,
  },
}));

const CssButtonCancel = styled(CssButton)({
  '&:hover': {
    backgroundColor: 'transparent',
  },
});

const CssButtonAdd = styled(CssButton)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
  },
}));

const filter = createFilterOptions();

export const AddDish = ({ dishes, add, close, title }) => {
  const dishesVariants = useSelector(getDishesVariants);
  const [count, setCount] = useState(1);

  const [value, setValue] = useState(null);
  const [open, toggleOpen] = useState(false);

  const [dialogValue, setDialogValue] = useState({
    name: '',
    calories: '',
    carbohydrates: '',
    fat: '',
    proteins: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      dialogValue.name &&
      dialogValue.calories &&
      dialogValue.carbohydrates &&
      dialogValue.fat &&
      dialogValue.proteins
    ) {
      setValue({
        id: uuid4(),
        name: dialogValue.name,
        calories: parseInt(dialogValue.calories, 10),
        carbohydrates: parseInt(dialogValue.carbohydrates, 10),
        fat: parseInt(dialogValue.fat, 10),
        proteins: parseInt(dialogValue.proteins, 10),
      });

      handleClose();
    }
  };

  const handleClose = () => {
    setDialogValue({
      name: '',
      calories: '',
      carbohydrates: '',
      fat: '',
      proteins: '',
    });

    toggleOpen(false);
  };

  const addCount = () => {
    setCount(count + 1);
  };

  const removeCount = () => {
    if (count > 1) setCount(count - 1);
  };

  const changeName = (event, newValue) => {
    if (typeof newValue === 'string') {
      setTimeout(() => {
        toggleOpen(true);
        setDialogValue({
          name: newValue,
          year: '',
        });
      });
    } else if (newValue && newValue.inputValue) {
      toggleOpen(true);
      setDialogValue({
        name: newValue.inputValue,
        year: '',
      });
    } else {
      setValue(newValue);
    }
  };

  const addDish = (e) => {
    e.preventDefault();
    if (!value) return;
    value.count = count;
    add(value);
  };

  return (
    <>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <CssAutocomplete
          value={value}
          onChange={changeName}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);

            if (params.inputValue !== '') {
              filtered.push({
                inputValue: params.inputValue,
                name: `Add "${params.inputValue}"`,
              });
            }

            return filtered;
          }}
          options={dishesVariants.filter((dish) => !dishes.includes(dish))}
          selectOnFocus
          autoHighlight
          clearOnBlur
          handleHomeEndKeys
          getOptionLabel={(option) => {
            if (typeof option === 'string') {
              return option;
            }
            if (option.inputValue) {
              return option.inputValue;
            }
            return option.name;
          }}
          freeSolo
          renderOption={(props, option) => <li {...props}>{option.name}</li>}
          renderInput={(params) => <TextField {...params} label="Dish" />}
        />
        <CssDialog open={open} onClose={handleClose}>
          <form onSubmit={handleSubmit}>
            <DialogTitle>Add a new product</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Did you miss any product in our list? Please, add it!
              </DialogContentText>
              <CssTextField
                autoFocus
                margin="dense"
                id="name"
                fullWidth
                variant="outlined"
                value={dialogValue.name}
                onChange={(event) =>
                  setDialogValue({
                    ...dialogValue,
                    name: event.target.value,
                  })
                }
                label="Name"
                type="text"
              />
              <CssTextField
                margin="dense"
                fullWidth
                variant="outlined"
                id="calories"
                value={dialogValue.calories}
                onChange={(event) =>
                  setDialogValue({
                    ...dialogValue,
                    calories: event.target.value,
                  })
                }
                label="Calories"
                type="number"
              />
              <CssTextField
                margin="dense"
                fullWidth
                variant="outlined"
                id="carbohydrates"
                value={dialogValue.carbohydrates}
                onChange={(event) =>
                  setDialogValue({
                    ...dialogValue,
                    carbohydrates: event.target.value,
                  })
                }
                label="Carbohydrates"
                type="number"
              />
              <CssTextField
                margin="dense"
                fullWidth
                variant="outlined"
                id="fat"
                value={dialogValue.fat}
                onChange={(event) =>
                  setDialogValue({
                    ...dialogValue,
                    fat: event.target.value,
                  })
                }
                label="Fat"
                type="number"
              />
              <CssTextField
                margin="dense"
                fullWidth
                variant="outlined"
                id="proteins"
                value={dialogValue.proteins}
                onChange={(event) =>
                  setDialogValue({
                    ...dialogValue,
                    proteins: event.target.value,
                  })
                }
                label="Proteins"
                type="number"
              />
            </DialogContent>
            <DialogActions>
              <CssButtonCancel onClick={handleClose}>Cancel</CssButtonCancel>
              <CssButtonAdd type="submit">Add</CssButtonAdd>
            </DialogActions>
          </form>
        </CssDialog>
        <div className="product-count">
          <Typography variant="h6">Counts:</Typography>
          <DishCounter
            count={count}
            increment={addCount}
            decrement={removeCount}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <CssButtonCancel onClick={close}>Cancel</CssButtonCancel>
        <CssButtonAdd onClick={addDish}>Add</CssButtonAdd>
      </DialogActions>
    </>
  );
};
