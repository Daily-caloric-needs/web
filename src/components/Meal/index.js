import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled';
import { useState } from 'react';
import { Modal } from '../Modal';
import { AddDish } from '../AddDish';
import './style.scss';

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
  const [dishes, setDishes] = useState([]);
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

  const addDish = (dish) => {
    setModal(false);
    const updatedDishes = [...dishes, dish];
    setDishes([...updatedDishes]);
  };

  const deleteDish = (id) => {
    setDishes(dishes.filter((dish) => dish.id !== id));
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
                      {dish.name} <span>x{dish.count}</span>
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
