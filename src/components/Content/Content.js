import { Avatar } from '../Avatar/Avatar';
import { Meal } from '../Meal/Meal';
import { Notification } from '../Notification/Notification';
import { Search } from '../Search/Search';
import { v4 as uuid4 } from 'uuid';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './style.scss';
import { Date } from '../Date/Date';
import { useState } from 'react';

const dataset = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      options: {
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
      },
    },
  ],
};

ChartJS.register(ArcElement, Tooltip, Legend);

export const Content = () => {
  const [meals, setMeals] = useState([
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
  ]);

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
      <div className="content__main">
        <div className="content__left">
          <Date />
          <div className="content__meals">
            {meals?.map((meal) => (
              <Meal key={meal.id} meal={meal} expand={expand} />
            ))}
          </div>
        </div>
        <div className="content__right">
          <Doughnut data={dataset} />
        </div>
      </div>
    </div>
  );
};
