import './style.scss';
import { Sidebar } from '../Sidebar/Sidebar';
import { Notification } from '../Notification/Notification';
import { Avatar } from '../Avatar/Avatar';
import { Search } from '../Search/Search';
import { Footer } from '../Footer/Footer';
import { useCallback, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { AddRecipe } from '../AddRecipe/AddRecipe';
import { Modal } from '../Modal/Modal';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from '../../store/UserData/selectors';
import { addRecipeToServer } from '../../store/Recipes/actions';
import { RecipeList } from '../RecipeList/RecipeList';
import { getDishesVariants } from '../../store/Dishes/selectors';
import { getDishes } from '../../store/Dishes/actions';

const CssButton = styled(Button)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  color: '#fff',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  },
}));

export const Recipes = () => {
  const [isOpen, setIsOpen] = useState(false);

  const user = useSelector(selectUserData());
  const dispatch = useDispatch();

  const dishesVariants = useSelector(getDishesVariants);

  useEffect(() => {
    if (!dishesVariants.length) {
      dispatch(getDishes());
    }
  }, [dispatch, dishesVariants]);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const addRecipe = useCallback(
    (recipe) => {
      dispatch(addRecipeToServer({ recipe, token: user.token }));
      setIsOpen(false);
    },
    [dispatch, user]
  );

  return (
    <div>
      <div className="container">
        <div className="content">
          <div className="content__header">
            <Sidebar />
            <Notification />
            <Avatar />
          </div>
          <div className="content__menu">
            <CssButton variant="contained" onClick={() => setIsOpen(true)}>
              Добавить свой рецепт
            </CssButton>
            <Search />
          </div>
          <div className="content__category">
            <button>Все рецепты</button>
            <button>Популярные</button>
            <button>Первые блюда</button>
            <button>Вторые блюда</button>
            <button>Закуски</button>
            <button>Выпечка</button>
            <button>Напитки</button>
            <button>Десерты</button>
          </div>
          <RecipeList />
        </div>
        <Footer />
      </div>
      {isOpen && (
        <Modal showModal={isOpen} closeModal={close} fullWidth>
          <AddRecipe close={close} addRecipe={addRecipe} />
        </Modal>
      )}
    </div>
  );
};