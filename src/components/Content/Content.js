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
import { useDispatch } from 'react-redux';
import { Water } from '../Water/Water';

const dataset = {
	labels: ['Жиры', 'Углеводы', 'Белки'],
	datasets: [
		{
			label: 'My First Dataset',
			data: [300, 50, 100],
			backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
			hoverOffset: 4,
		},
	],
};

ChartJS.register(ArcElement, Tooltip, Legend);

export const Content = () => {
	const dispatch = useDispatch();
	const [meals, setMeals] = useState(MEALS);

	useEffect(() => {
		dispatch(getDishes());
	}, [dispatch]);

	const expand = (meal) => {
		const updatedMeals = meals.map((item) => {
			if (item.id === meal.id) {
				item.expanded = !item.expanded;
			}
			return item;
		});

		setMeals([...updatedMeals]);
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
					<Water />
				</div>
				<div className="content__right">
					<Doughnut data={dataset} />
				</div>
			</div>
		</div>
	);
};
