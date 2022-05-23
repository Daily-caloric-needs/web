import './style.scss';
import { Sidebar } from '../Sidebar/Sidebar';
import { Notification } from '../Notification/Notification';
import { Avatar } from '../Avatar/Avatar';
import { Search } from '../Search/Search';
import { Footer } from '../Footer/Footer';
import { RecipeItem } from '../RecipeItem/RecipeItem';
import { useCallback, useState } from 'react';
import { Button } from '@mui/material';
import { AddRecipe } from '../AddRecipe/AddRecipe';
import { Modal } from '../Modal/Modal';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from '../../store/UserData/selectors';
import { addRecipeToServer } from '../../store/Recipes/actions';

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

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const addRecipe = useCallback((recipe) => {
    console.log(recipe);
    dispatch(addRecipeToServer({ recipe, token: user.token }));
    console.log('Add recipe');
  }, []);

  return (
    <>
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
          <RecipeItem />
        </div>
        <Footer />
      </div>
      {isOpen && (
        <Modal showModal={isOpen} closeModal={close} fullWidth>
          <AddRecipe close={close} addRecipe={addRecipe} />
        </Modal>
      )}
    </>
  );
};
