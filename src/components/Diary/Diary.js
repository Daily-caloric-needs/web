import { Avatar } from "../Avatar/Avatar";
import { Meal } from "../Meal/Meal";
import { Notification } from "../Notification/Notification";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./style.scss";
import { Date } from "../Date/Date";
import { useEffect, useState } from "react";
import { MEALS } from "../../constants";
import { getDishes } from "../../store/Dishes/actions";
import { useDispatch, useSelector } from "react-redux";
import { Water } from "../Water/Water";
import { selectAmountNutrientsFromToday } from "../../store/AmountNutrients/selectors";
import { selectAllDishes } from "../../store/Meals/selectors";
import { amountNutrientsFromToday } from "../../store/AmountNutrients/actions";
import { selectNormNutrients } from '../../store/CaloriesCalculator/selectors';
import { Sidebar } from "../Sidebar/Sidebar";
import { Button, Typography } from "@mui/material";
import { Modal } from '../Modal/Modal';
import { CaloriesCalculator } from '../CaloriesCalculator/CaloriesCalculator';
import { Footer } from '../Footer/Footer';

export const Diary = () => {
  const allDishes = useSelector(selectAllDishes());
  const amountNutrientsToday = useSelector(selectAmountNutrientsFromToday());
  const caloriesNorm = useSelector(selectNormNutrients());
  const dispatch = useDispatch();
  const [meals, setMeals] = useState(MEALS);
  const [modal, setModal] = useState(false);

  const sumDay =
    amountNutrientsToday?.proteins +
    amountNutrientsToday?.carbohydrates +
    amountNutrientsToday?.fat;

  let sumDayPercentProteins = 0;
  let sumDayPercentFat = 0;
  let sumDayPercentCarboydrates = 0;

  const closeModal = () => {
		setModal(false);
	};

  if (amountNutrientsToday.carbohydrates > 0) {
    sumDayPercentProteins = `Белки: ${Math.round(
      (amountNutrientsToday.proteins * 100) / sumDay
    )}%`;
    sumDayPercentFat = `Жиры: ${Math.round(
      (amountNutrientsToday.fat * 100) / sumDay
    )}%`;
    sumDayPercentCarboydrates = `Углеводы: ${Math.round(
      (amountNutrientsToday.carbohydrates * 100) / sumDay
    )}%`;
  }

  const dataset = {
    labels: [
      sumDayPercentProteins,
      sumDayPercentFat,
      sumDayPercentCarboydrates,
    ],
    datasets: [
      {
        label: "Моя первая статистика",
        data: [
          amountNutrientsToday.proteins,
          amountNutrientsToday.fat,
          amountNutrientsToday.carbohydrates,
        ],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 205, 86)",
          "rgb(54, 162, 235)",
        ],
        hoverOffset: 4,
      },
    ],
    options: {
      parsing: {
        key: "value",
      },
    },
  };

  ChartJS.register(ArcElement, Tooltip, Legend);

  useEffect(() => {
    dispatch(getDishes());
  }, [dispatch]);

  useEffect(() => {
    // посчитанные калории и БЖУ за день
    const nutrientsFromToday = {
      calories: calculateNutrientFromToday("calories"),
      proteins: calculateNutrientFromToday("proteins"),
      fat: calculateNutrientFromToday("fat"),
      carbohydrates: calculateNutrientFromToday("carbohydrates"),
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
      countNutrientFromMeal("breakfast"),
      countNutrientFromMeal("lunch"),
      countNutrientFromMeal("dinner"),
      countNutrientFromMeal("snack"),
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
    <>
      {modal && (
        <Modal showModal={modal} closeModal={closeModal}>
          <CaloriesCalculator setModal={setModal}/>
        </Modal>
      )}
      <div className="container">
        <div className="content">
          <div className="content__header">
            <Sidebar />
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
              <div className="content__nutrients-days">
                <h2>Потреблено:</h2>
                <div>Калорий за день: {amountNutrientsToday.calories}</div>
                <div>Белков за день: {amountNutrientsToday.proteins} г.</div>
                <div>Жиров за день: {amountNutrientsToday.fat} г.</div>
                <div>
                  Углеводов за день: {amountNutrientsToday.carbohydrates} г.
                </div>
              </div>
            </div>
            <div className="content__right">
              <Typography align="center">
                <span className='content__calories-text'>Потреблено: {amountNutrientsToday.calories} из 
                  {caloriesNorm > 0 ? <> {caloriesNorm} ККал</> : <Button variant='outlined' size='small' sx={{ marginLeft: 1 }}onClick={() => setModal(true)}>Узнать норму</Button>}
                </span>
              </Typography>
              {caloriesNorm > 0 && <Doughnut data={dataset} />}
              <Water setModal={setModal}/>
            </div>
          </div>
          </div>
          <Footer/>
      </div>
    </>
  );
};
