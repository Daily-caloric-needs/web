import { v4 as uuid4 } from 'uuid';

export const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
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
    title: 'Breakfast',
    expanded: true,
  },
  {
    id: uuid4(),
    title: 'Lunch',
    expanded: false,
  },
  {
    id: uuid4(),
    title: 'Dinner',
    expanded: false,
  },
  {
    id: uuid4(),
    title: 'Snack',
    expanded: false,
  },
];
