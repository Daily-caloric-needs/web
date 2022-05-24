import styled from '@emotion/styled';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useCallback, useState, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { Modal } from '../Modal/Modal';
import { AddDish } from '../AddDish/AddDish';
import { ProductItem } from '../ProductItem/ProductItem';
import { selectUserData } from '../../store/UserData/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getDishesVariants } from '../../store/Dishes/selectors';
import { getDishes } from '../../store/Dishes/actions';

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

const CssButton = styled(Button)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  '&:hover': {
    boxShadow: `0 0 10px 1px ${theme.palette.primary.main}`,
  },
}));

const CssButtonColored = styled(CssButton)(({ theme }) => ({
  color: '#fff',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
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

const Input = styled('input')({
  display: 'none',
});

const categoriesList = [
  'Первые блюда',
  'Вторые блюда',
  'Закуски',
  'Выпечка',
  'Напитки',
  'Десерты',
];

export const AddRecipe = ({ close, addRecipe }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [productsList, setProductsList] = useState([]);
  const [category, setCategory] = useState('');
  const [isOpenAddProduct, setIsOpenAddProduct] = useState(false);

  const userData = useSelector(selectUserData());

  const handleChangeCategories = useCallback((e) => {
    setCategory(e.target.value);
  }, []);

  const addProduct = useCallback(
    (product) => {
      setProductsList([...productsList, product]);
      setIsOpenAddProduct(false);
    },
    [productsList]
  );

  const deleteProduct = useCallback(
    (id) => {
      const updatedProductsList = productsList.filter(
        (product) => product.id !== id
      );
      setProductsList(updatedProductsList);
    },
    [productsList]
  );

  const addCount = (id) => {
    const updatedProductsList = productsList.map((product) => {
      if (product.id === id) product.count += 100;
      return product;
    });

    setProductsList(updatedProductsList);
  };

  const changeCountFromInput = (count, id) => {
    let isDelete = false;
    let updatedDishes = productsList.map((dish) => {
      if (dish.id === id) {
        if (count > 0 || count === '') {
          dish.count = +count;
        } else {
          isDelete = true;
        }
      }
      return dish;
    });

    if (isDelete) {
      updatedDishes = productsList.filter((dish) => dish.id !== id);
    }
    setProductsList([...updatedDishes]);
  };

  const deleteCount = (id) => {
    let isDelete = false;
    let updatedProductsList = productsList.map((product) => {
      if (product.id === id) {
        product.count > 101 ? (product.count -= 100) : (isDelete = true);
      }
      return product;
    });

    if (isDelete)
      updatedProductsList = productsList.filter((product) => product.id !== id);

    setProductsList(updatedProductsList);
  };

  const handleAddRecipe = useCallback(() => {
    const products = [];
    productsList.forEach((product) => {
      products.push({
        product_id: product.id,
        modifier: product.count / 100,
      });
    });
    const recipe = {
      user_id: userData.user.id,
      name: title,
      categories: category,
      description,
      productsList: [...products],
    };

    addRecipe(recipe);
  }, [category, userData, addRecipe, title, description, productsList]);

  return (
    <>
      <DialogTitle>Добавление нового рецепта</DialogTitle>
      <DialogContent>
        <Grid container mt={1} direction="column" rowSpacing={2}>
          <Grid item>
            <CssTextField
              autoFocus
              margin="dense"
              id="title"
              fullWidth
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              label="Название рецепта"
            />
          </Grid>
          <Grid item>
            <FormControl fullWidth>
              <InputLabel id="category">Выберите категорию</InputLabel>
              <Select
                labelId="category"
                id="demo-multiple-name"
                value={category}
                onChange={handleChangeCategories}
                input={<OutlinedInput label="Выберите категорию" />}
              >
                {categoriesList.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid container item direction="column" rowSpacing={1}>
            <Grid item>
              <Typography variant="h6">Список продуктов:</Typography>
            </Grid>
            <Grid item>
              {productsList.length ? (
                <Stack spacing={2}>
                  {productsList.map((product) => (
                    <ProductItem
                      key={product.id}
                      product={product}
                      del={() => deleteProduct(product.id)}
                      addCount={() => addCount(product.id)}
                      delCount={() => deleteCount(product.id)}
                      changeCount={changeCountFromInput}
                    />
                  ))}
                </Stack>
              ) : (
                'Заполните список продуктов'
              )}
            </Grid>
            <Grid item alignSelf="flex-end">
              <CssButtonColored
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => setIsOpenAddProduct(true)}
              >
                Добавить продукт
              </CssButtonColored>
            </Grid>
          </Grid>
          <Grid item>
            <CssTextField
              id="description"
              label="Описание"
              placeholder="Опишите процесс приготовления"
              multiline
              fullWidth
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item alignSelf="flex-end">
            <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
              />
              <CssButtonColored
                variant="contained"
                component="span"
                startIcon={<PhotoCameraIcon />}
              >
                Добавить фото
              </CssButtonColored>
            </label>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <CssButtonCancel onClick={close}>Отмена</CssButtonCancel>
        <CssButtonAdd onClick={handleAddRecipe}>Добавить</CssButtonAdd>
      </DialogActions>
      {isOpenAddProduct && (
        <Modal
          showModal={isOpenAddProduct}
          closeModal={() => setIsOpenAddProduct(false)}
        >
          <AddDish
            dishes={productsList}
            title="Добавить продукт"
            add={addProduct}
            close={() => setIsOpenAddProduct(false)}
          />
        </Modal>
      )}
    </>
  );
};
