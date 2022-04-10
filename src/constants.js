import { v4 as uuid4 } from 'uuid';

export const daysOfWeek = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

export const REQUEST_STATUS = {
  CREATED: 0,
  LOADING: 1,
  SUCCESS: 2,
  FAILURE: 3,
};

export const MEALS = [
  {
    id: uuid4(),
    title: 'breakfast',
    titleRus: 'Завтрак',
    expanded: true,
  },
  {
    id: uuid4(),
    title: 'lunch',
    titleRus: 'Обед',
    expanded: false,
  },
  {
    id: uuid4(),
    title: 'dinner',
    titleRus: 'Ужин',
    expanded: false,
  },
  {
    id: uuid4(),
    title: 'snack',
    titleRus: 'Перекус',
    expanded: false,
  },
];

export const API = 'http://213.226.114.162/api/';
