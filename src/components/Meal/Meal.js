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
  const dishes = useSelector(state => state);
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

  return (
    <>
      {modal && (
        <Modal showModal={modal} closeModal={closeModal}>
          <AddDish title="Add Dish" add={addDish} close={closeModal} />
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
                    onClick={() => deleteDish(dish.id)}
                  >
                    <p>
                      {dish.name} - <span>{dish.count} pcs</span>
                    </p>
                  </li>
                ))}
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
