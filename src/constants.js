import { v4 as uuid4 } from 'uuid';

export const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

export const REQUEST_STATUS = {
	CREATED: 0,
	LOADING: 1,
	SUCCESS: 2,
	FAILURE: 3,
};

export const MEALS = [
	{
		id: uuid4(),
		title: 'Завтрак',
		expanded: true,
	},
	{
		id: uuid4(),
		title: 'Обед',
		expanded: false,
	},
	{
		id: uuid4(),
		title: 'Ужин',
		expanded: false,
	},
	{
		id: uuid4(),
		title: 'Перекус',
		expanded: false,
	},
];
