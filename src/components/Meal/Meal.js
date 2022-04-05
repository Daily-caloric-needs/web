import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { AddDish } from '../AddDish/AddDish';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  addDishAction,
  addDishCount,
  deleteDishAction,
  deleteDishCount,
} from '../../store/Dishes/actions';
import { selectDishesList } from '../../store/Dishes/selectors';
import { ProductItem } from '../ProductItem/ProductItem';

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  borderRadius: 20,
  boxShadow: `0px 0px 10px ${theme.palette.primary.main}`,
  '& .Mui-expanded': {
    borderRadius: 20,
  },
}));

const CssAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  fontSize: '1.2rem',
  fontWeight: 700,
  borderRadius: 20,
  color: '#fff',
  transform: 'scale(1.05)',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));

const CssAccordionDetails = styled(AccordionDetails)({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 20,
});

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

export const Meal = ({ meal, expand }) => {
  const dispatch = useDispatch();
  const dishes = useSelector(selectDishesList);
  console.log(dishes, 'dishes from store');
  const [modal, setModal] = useState(false);

  const expandMeal = () => {
    expand(meal);
  };

  const showModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  // функция добавления продукта
  const addDish = (dish) => {
    setModal(false);
    dispatch(addDishAction(dish));
  };

  // функция удаления продукта
  const deleteDish = (id) => {
    dispatch(deleteDishAction(id));
  };

  const addCount = (id) => {
    dispatch(addDishCount(id));
  };

  const deleteCount = (id) => {
    dispatch(deleteDishCount(id));
  };

  return (
    <>
      {modal && (
        <Modal showModal={modal} closeModal={closeModal}>
          <AddDish title="Add Dish" add={addDish} close={closeModal} />
        </Modal>
      )}

      <CustomAccordion expanded={meal.expanded}>
        <CssAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={expandMeal}
        >
          {meal.title}
        </CssAccordionSummary>
        <CssAccordionDetails>
          <div className="dishes">
            {dishes?.length > 0 ? (
              <div className="dishes__list">
                {dishes?.map((dish) => (
                  <ProductItem
                    key={dish.id}
                    className="dishes__item"
                    del={() => deleteDish(dish.id)}
                    product={dish}
                    addCount={() => addCount(dish.id)}
                    delCount={() => deleteCount(dish.id)}
                  />
                ))}
              </div>
            ) : (
              <p className="dishes__empty">No dishes</p>
            )}
            <CustomIconButton aria-label="Add product" onClick={showModal}>
              <AddIcon />
            </CustomIconButton>
          </div>
        </CssAccordionDetails>
      </CustomAccordion>
    </>
  );
};
