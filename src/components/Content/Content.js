import { Avatar } from '../Avatar/Avatar';
import { Meal } from '../Meal/Meal';
import { Notification } from '../Notification/Notification';
import { Search } from '../Search/Search';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './style.scss';
import { Date } from '../Date/Date';
import { useEffect, useState } from 'react';
import { MEALS } from '../../constants';
import { getDishes } from '../../store/Dishes/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Water } from '../Water/Water';
import { selectAmountNutrientsFromToday } from '../../store/AmountNutrients/selectors';
import { selectAllDishes } from '../../store/Meals/selectors';
import { amountNutrientsFromToday } from '../../store/AmountNutrients/actions';

const dataset = {
	labels: ['Белки', 'Жиры', 'Углеводы'],
	datasets: [
		{
			label: 'Моя первая статистика',
			data: [300, 50, 100],
			backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
			hoverOffset: 4,
		},
	],
};

ChartJS.register(ArcElement, Tooltip, Legend);

export const Content = () => {
	const allDishes = useSelector(selectAllDishes());
	const amountNutrientsToday = useSelector(selectAmountNutrientsFromToday());
	const dispatch = useDispatch();
	const [meals, setMeals] = useState(MEALS);

	useEffect(() => {
		dispatch(getDishes());
	}, [dispatch]);

	useEffect(() => {
		// посчитанные калории и БЖУ за день
		const nutrientsFromToday = {
			calories: calculateNutrientFromToday('calories'),
			proteins: calculateNutrientFromToday('proteins'),
			fat: calculateNutrientFromToday('fat'),
			carbohydrates: calculateNutrientFromToday('carbohydrates')
		};		
		
		dispatch(amountNutrientsFromToday(nutrientsFromToday));
	}, [allDishes, dispatch]);

	const expand = (meal) => {
		const updatedMeals = meals.map((item) => {
			if (item.id === meal.id) {
				item.expanded = !item.expanded;
			}
			return item;
		});

		setMeals([...updatedMeals]);
	};

	// функция подсчета вещества для текущего дня
	const calculateNutrientFromToday = (nutrient) => {

		// считаем количество вещества в приеме пищи
		const countNutrientFromMeal = (meal) => {
			const initialValue = 0;
			return allDishes[meal].reduce(
				(accumulator, currentValue) => accumulator + currentValue[nutrient],
				initialValue
			);
		};

		// массив данных по количеству вещества для каждого приема пищи
		const arrCountNutrientToday = [
			countNutrientFromMeal('breakfast'),
			countNutrientFromMeal('lunch'),
			countNutrientFromMeal('dinner'),
			countNutrientFromMeal('snack')
		];

		const initialValue = 0;
		// суммируем вещество с каждого приема пищи
		const countNutrientFromToday = arrCountNutrientToday.reduce(
			(accumulator, currentValue) => accumulator + currentValue,
			initialValue
		);
		return countNutrientFromToday;
	};

	return (
		<div className="content">
			<div className="content__header">
				<Search />
				<Notification />
				<Avatar />
			</div>
			<Date />
			<div className="content__main">
				<div className="content__left">
					<div className="content__meals">
						{meals?.map((meal) => (
							<Meal key={meal.id} meal={meal} expand={expand} />
						))}
					</div>
					<div>Калорий/день: {amountNutrientsToday.calories}</div>
					<div>Белков/день: {amountNutrientsToday.proteins}</div>
					<div>Жиров/день: {amountNutrientsToday.fat}</div>
					<div>Углеводов/день: {amountNutrientsToday.carbohydrates}</div>
					<Water />
				</div>
				<div className="content__right">
					<Doughnut data={dataset} />
				</div>
			</div>
		</div>
	);
};
