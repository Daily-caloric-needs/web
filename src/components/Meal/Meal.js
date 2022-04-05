import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { AddDish } from '../AddDish/AddDish';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addDishAction } from '../../store/actions/addDishAction';
import { deleteDishAction } from '../../store/actions/deleteDishAction';
import { changeCountDishAction } from '../../store/actions/changeCountDishAction';

const CssAccordionSummary = styled(AccordionSummary)({
  backgroundColor: 'coral',
  fontSize: '1.2rem',
  color: '#fff',
});

const CssAccordionDetails = styled(AccordionDetails)({
  display: 'flex',
  flexDirection: 'column',
});

export const Meal = ({ meal, expand }) => {
  const dispatch = useDispatch();
  const dishes = useSelector(state => state[meal.title]);
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
    const payload = {
      id,
      mealName: [meal.title]
    };
    dispatch(deleteDishAction(payload));
  };

  // функция изменения количества продукта
  const changeCountDish = (id, count) => {
    let findDish = dishes.find(dish => {
      return dish.id === id;
    });
    const indexOfDish = dishes.indexOf(findDish);
    findDish.count = findDish.count + count;
    if (findDish.count < 1) {
      deleteDish(id)
    } else {
      dishes.splice(indexOfDish, 1, findDish);
      dispatch(changeCountDishAction(dishes, meal.title));
    }
  };

  return (
    <>
      {modal && (
        <Modal showModal={modal} closeModal={closeModal}>
          <AddDish title="Add Dish" mealName={meal.title} add={addDish} close={closeModal} />
        </Modal>
      )}

      <Accordion expanded={meal.expanded}>
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
              <ul className="dishes__list">
                {dishes?.map((dish) => (
                  <li
                    key={dish.id}
                    className="dishes__item"
                  >

                    <p>
                      <button className="dishes__item-btn" onClick={() => deleteDish(dish.id)}>&#10008;</button>
                      {dish.name} - <span>{dish.count} г/шт.</span>
                    </p>
                    <div>
                      <button className="dishes__item-btn dishes__item-btn__dicr" onClick={() => changeCountDish(dish.id, -1)}>-</button>
                      <button className="dishes__item-btn" onClick={() => changeCountDish(dish.id, 1)}>+</button>
                    </div>
                  </li>
                )
                )}
              </ul>
            ) : (
              <p className="dishes__empty">No dishes</p>
            )}
            <button className="dishes__add btn" onClick={showModal}>
              <AddIcon />
            </button>
          </div>
        </CssAccordionDetails>
      </Accordion>
    </>
  );
};
