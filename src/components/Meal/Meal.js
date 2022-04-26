import { Accordion, AccordionDetails, AccordionSummary, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Modal } from '../Modal/Modal';
import { AddDish } from '../AddDish/AddDish';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { DishItem } from '../DishItem/DishItem';
import { selectDishesFromMeal } from '../../store/Meals/selectors';
import { addDishToMeal, changeDishFromMeal, deleteDishFromMeal } from '../../store/Meals/actions';
import { amountNutrientsFromMeal } from '../../store/AmountNutrients/actions';
import { selectAmountNutrientsFromMeal } from '../../store/AmountNutrients/selectors';
import { getDishesVariants } from '../../store/Dishes/selectors';

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
	const dishes = useSelector(selectDishesFromMeal(meal.title));
	const dishesVariants = useSelector(getDishesVariants);
	const amountNutrients = useSelector(selectAmountNutrientsFromMeal(meal.title));
	const [modal, setModal] = useState(false);

	useEffect(() => {
		// посчитанные калории и БЖУ за прием пищи
		const nutrientsFromMeal = {
			calories: calculateNutrientFromMeal('calories'),
			proteins: calculateNutrientFromMeal('proteins'),
			fat: calculateNutrientFromMeal('fat'),
			carbohydrates: calculateNutrientFromMeal('carbohydrates')
		};		
		
		dispatch(amountNutrientsFromMeal(nutrientsFromMeal, meal.title));
	}, [dishes, dispatch, meal.title]);

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
	};

	// функция подсчета веществ для продукта
	const calculateNutrientsFromProduct = (dish) => {
		const resultSearchInDB = dishesVariants.find(item => item.id === dish.id);

		const caloriesPerGram = resultSearchInDB.calories / 100;
		const proteinsPerGram = resultSearchInDB.proteins / 100;
		const fatPerGram = resultSearchInDB.fat / 100;
		const carbohydratesPerGram = resultSearchInDB.carbohydrates / 100;

		dish.calories = Math.round(caloriesPerGram * dish.count);
		dish.proteins = Math.round(proteinsPerGram * dish.count);
		dish.fat = Math.round(fatPerGram * dish.count);
		dish.carbohydrates = Math.round(carbohydratesPerGram * dish.count);

		return dish;
	};

	// функция прибавления количества продукта
	const addCount = (id) => {
		const updatedDishes = dishes.map((dish) => {
			if (dish.id === id) {
				dish.count += 100;
				calculateNutrientsFromProduct(dish);
			}
			return dish;
		});

		dispatch(changeDishFromMeal(updatedDishes, meal.title));
	};

	// функция убавления количества продукта
	const deleteCount = (id) => {
		let isDelete = false;
		let updatedDishes = dishes.map((dish) => {
			if (dish.id === id) {
				if (dish.count > 100) {
					dish.count -= 100;
					calculateNutrientsFromProduct(dish);
				} else {
					isDelete = true;
				}
			}
			return dish;
		});

		if (isDelete) updatedDishes = dishes.filter((dish) => dish.id !== id);
		dispatch(changeDishFromMeal(updatedDishes, meal.title));
	};

	// функция изменения количества продукта в input
	const changeCountFromInput = (count, id) => {
		let isDelete = false;
		let updatedDishes = dishes.map((dish) => {
			if (dish.id === id) {
				if (count > 0 || count === '' ) {
					dish.count = +count;
					calculateNutrientsFromProduct(dish);
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
					<div className='meal__header'>
						{meal.titleRus}
						{dishes.length > 0 && (<p> ККал: {amountNutrients.calories} </p>)}
					</div>
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
										changeCount={changeCountFromInput}
									/>
								))}
							</div>
							<div className='dishes__nutrients'>
									<p>Эн.ценность: {amountNutrients.calories} ККал</p>
									<p>Белки: {amountNutrients.proteins} г.</p>
									<p>Жиры: {amountNutrients.fat} г.</p>
									<p>Углеводы: {amountNutrients.carbohydrates} г.</p>
							</div>
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
