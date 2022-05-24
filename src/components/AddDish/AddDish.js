import { useState } from "react";
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
} from "@mui/material";
import { CssDialog } from "../Modal/Modal";
import styled from "@emotion/styled";
import { getDishesVariants } from "../../store/Dishes/selectors";
import { useDispatch, useSelector } from "react-redux";
import { DishCounter } from "../DishCounter/DishCounter";
import "./style.scss";
import { addDishToServer } from "../../store/Dishes/actions";

const CssTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    color: theme.palette.primary.main,
  },
  "& label.Mui-focused": {
    color: theme.palette.primary.main,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.palette.primary.main,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      color: theme.palette.text.primary,
      borderColor: theme.palette.primary.main,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const CssAutocomplete = styled(Autocomplete)(({ theme }) => ({
  marginTop: 20,
  marginBottom: 10,

  "& .MuiInputLabel-root": {
    color: theme.palette.primary.main,
  },
  "& label.Mui-focused": {
    color: theme.palette.primary.main,
  },
  "& .MuiOutlinedInput-root": {
    "& input": {
      color: theme.palette.text.black,
    },
    "& fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const CssButton = styled(Button)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  "&:hover": {
    boxShadow: `0 0 10px 1px ${theme.palette.primary.main}`,
  },
}));

const CssButtonCancel = styled(CssButton)({
  "&:hover": {
    backgroundColor: "transparent",
  },
});

const CssButtonAdd = styled(CssButton)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
  },
}));

const filter = createFilterOptions();

export const AddDish = ({ dishes, add, close, title }) => {
  const dispatch = useDispatch();
  const dishesVariants = useSelector(getDishesVariants);
  const [count, setCount] = useState(100);

  const [value, setValue] = useState(null);
  const [open, toggleOpen] = useState(false);

  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [fat, setFat] = useState(0);
  const [carbohydrates, setCarbohydrates] = useState(0);
  const [proteins, setProteins] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      name &&
      calories >= 0 &&
      carbohydrates >= 0 &&
      fat >= 0 &&
      proteins >= 0
    ) {
      const newDish = await dispatch(
        addDishToServer({
          name,
          calories,
          carbohydrates,
          fat,
          proteins,
        })
      );
      setValue(newDish);
      handleClose();
    }
  };

  const handleClose = () => {
    setName("");
    setCalories(0);
    setCarbohydrates(0);
    setFat(0);
    setProteins(0);

    toggleOpen(false);
  };

  const addCount = () => {
    setCount(count + 100);
  };

  const removeCount = () => {
    if (count > 100) setCount(count - 100);
  };

  const changeName = (event, newValue) => {
    if (typeof newValue === "string") {
      setTimeout(() => {
        toggleOpen(true);
        setName(newValue);
      });
    } else if (newValue && newValue.inputValue) {
      toggleOpen(true);
      setName(newValue.inputValue);
    } else {
      setValue(newValue);
    }
  };

  const addDish = (e) => {
    e.preventDefault();
    if (!value) return;

    const dish = Object.assign({}, value);
    dish.count = count;
    dish.calories = Math.round((dish.calories / 100) * count);
    dish.fat = Math.round((dish.fat / 100) * count);
    dish.proteins = Math.round((dish.proteins / 100) * count);
    dish.carbohydrates = Math.round((dish.carbohydrates / 100) * count);

    add(dish);
  };

  const validationCount = (count) => {
    if (count < 1) count = 1;
    count = +count;
    setCount(count);
  };

  return (
    <>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <CssAutocomplete
          value={value}
          onChange={changeName}
          filterOptions={(options, params) => {
            if (params.inputValue.length < 2) {
              return [];
            }
            const filtered = filter(options, params);

            return [
              {
                inputValue: params.inputValue,
                name: `Добавить "${params.inputValue}"`,
              },
              ...filtered,
            ];
          }}
          options={dishesVariants}
          selectOnFocus
          autoHighlight
          clearOnBlur
          handleHomeEndKeys
          getOptionLabel={(option) => {
            if (typeof option === "string") {
              return option;
            }
            if (option.inputValue) {
              return option.inputValue;
            }
            return option.name;
          }}
          freeSolo
          renderOption={(props, option) => <li {...props}>{option.name}</li>}
          renderInput={(params) => (
            <TextField {...params} label="Продукт" autoFocus />
          )}
        />
        <CssDialog open={open} onClose={handleClose}>
          <form onSubmit={handleSubmit}>
            <DialogTitle>Добавить новый продукт</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Не нашли нужный продукт? Добавьте его!
              </DialogContentText>
              <CssTextField
                autoFocus
                margin="dense"
                id="name"
                fullWidth
                variant="outlined"
                value={name}
                onChange={(event) => setName(event.target.value)}
                label="Название"
                type="text"
              />
              <CssTextField
                margin="dense"
                fullWidth
                variant="outlined"
                id="calories"
                value={calories}
                onChange={(event) =>
                  setCalories(+event.target.value > 0 ? +event.target.value : 0)
                }
                label="Калории на 100 гр."
                type="number"
              />
              <CssTextField
                margin="dense"
                fullWidth
                variant="outlined"
                id="proteins"
                value={proteins}
                onChange={(event) =>
                  setProteins(+event.target.value > 0 ? +event.target.value : 0)
                }
                label="Белки на 100 гр."
                type="number"
              />
              <CssTextField
                margin="dense"
                fullWidth
                variant="outlined"
                id="fat"
                value={fat}
                onChange={(event) =>
                  setFat(+event.target.value > 0 ? +event.target.value : 0)
                }
                label="Жиры на 100 гр."
                type="number"
              />
              <CssTextField
                margin="dense"
                fullWidth
                variant="outlined"
                id="carbohydrates"
                value={carbohydrates}
                onChange={(event) =>
                  setCarbohydrates(
                    +event.target.value > 0 ? +event.target.value : 0
                  )
                }
                label="Углеводы на 100 гр."
                type="number"
              />
            </DialogContent>
            <DialogActions>
              <CssButtonCancel onClick={handleClose}>Отмена</CssButtonCancel>
              <CssButtonAdd type="submit">Добавить</CssButtonAdd>
            </DialogActions>
          </form>
        </CssDialog>
        <div className="product-count">
          <Typography variant="h6">Количество: </Typography>
          <DishCounter
            count={count}
            validationCount={validationCount}
            increment={addCount}
            decrement={removeCount}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <CssButtonCancel onClick={close}>Отмена</CssButtonCancel>
        <CssButtonAdd onClick={addDish}>Добавить</CssButtonAdd>
      </DialogActions>
    </>
  );
};
