import { Accordion, AccordionDetails, AccordionSummary, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { AddDish } from '../AddDish/AddDish';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { DishItem } from '../DishItem/DishItem';
import { selectDishes } from '../../store/Meals/selectors';
import { addDishToMeal, changeDishFromMeal, deleteDishFromMeal } from '../../store/Meals/actions';

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
	const dishes = useSelector(selectDishes(meal.title));
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
		dispatch(addDishToMeal(dish, meal.title));
	};

	// функция удаления продукта
	const deleteDish = (id) => {
		dispatch(deleteDishFromMeal(id, meal.title));
		// dispatch(deleteCountNutrientFromMeal(meal.title));
	};

	// функция подсчета веществ для продукта
	const calculateNutrientsForProduct = (dish, prevCount) => {
		dish.calories = dish.calories / prevCount * dish.count;
		dish.fat = dish.fat / prevCount * dish.count;
		dish.proteins = dish.proteins / prevCount * dish.count;
		dish.carbohydrates = dish.carbohydrates / prevCount * dish.count;

		return dish;
	};

	// функция прибавления количества продукта
	const addCount = (id) => {
		const updatedDish = dishes.map((dish) => {
			if (dish.id === id) {
				const prevCount = dish.count;
				dish.count++;
				calculateNutrientsForProduct(dish, prevCount);
			}
			return dish;
		});

		dispatch(changeDishFromMeal(updatedDish, meal.title));
	};

	// функция убавления количества продукта
	const deleteCount = (id) => {
		let isDelete = false;
		let updatedDishes = dishes.map((dish) => {
			if (dish.id === id) {
				if (dish.count > 1) {
					const prevCount = dish.count;
					dish.count--;
					calculateNutrientsForProduct(dish, prevCount);
				} else {
					isDelete = true;
				}
			}
			return dish;
		});
		if (isDelete) updatedDishes = dishes.filter((dish) => dish.id !== id);

		dispatch(changeDishFromMeal(updatedDishes, meal.title));
	};

	// функция подсчета вещества для приема пищи
	const calculateNutrientFromMeal = (nutrient) => {
		const initialValue = 0;
		const countNutrientFromMeal = dishes.reduce(
			(accumulator, currentValue) => accumulator + currentValue[nutrient],
			initialValue
		);
		return countNutrientFromMeal;
	};

	return (
		<>
			{modal && (
				<Modal showModal={modal} closeModal={closeModal}>
					<AddDish dishes={dishes} title="Добавить продукт" add={addDish} close={closeModal} />
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
							<>
								<div className="dishes__list">
									{dishes?.map((dish) => (
										<DishItem
											key={dish.id}
											className="dishes__item"
											del={() => deleteDish(dish.id)}
											dish={dish}
											addCount={() => addCount(dish.id)}
											delCount={() => deleteCount(dish.id)}
										/>
									))}
								</div>
								<div>Калорий потреблено: {calculateNutrientFromMeal('calories')}</div>
								<div>Жиров потреблено: {calculateNutrientFromMeal('fat')}</div>
								<div>Белков потреблено: {calculateNutrientFromMeal('proteins')}</div>
								<div>Углеводов потреблено: {calculateNutrientFromMeal('carbohydrates')}</div>
							</>
						) : (
							<p className="dishes__empty">Продукты или блюда не добавлены</p>
						)}
						<CustomIconButton aria-label="Добавить продукт" onClick={showModal}>
							<AddIcon />
						</CustomIconButton>
					</div>
				</CssAccordionDetails>
			</CustomAccordion>
		</>
	);
};
