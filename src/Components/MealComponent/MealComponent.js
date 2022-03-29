import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTotalCalories } from "../../actions/addCaloriesAction";

const MealComponent = ({meal}) => {
  console.log(`${meal} component render`);

  const totalCalories = useSelector(state => state.calories.totalCalories);
  const [productsPerMeal, setProductsPerMeal] = useState([]);
  const [caloriesPerMeal, setCaloriesPerMeal] = useState(0);
  const dispatch = useDispatch();

  const addProduct = (e, calories, food) => {
    e.preventDefault();
    setProductsPerMeal(prevState => [...prevState, {calories: calories, food: food}]);
    setCaloriesPerMeal(prevState => prevState + calories);
    dispatch(addTotalCalories(totalCalories + calories));
  };

  return (
    <fieldset className="mealtime_container">

      <legend className="mealtime">{meal}</legend>
      <div>
        <label htmlFor={meal}>Add food</label>

        <button onClick={(e) => addProduct(e, 89, 'Banana')}>Банан</button>
        <button onClick={(e) => addProduct(e, 59, 'Yogurt')}>Йогурт</button>
        <button onClick={(e) => addProduct(e, 52, 'Apple')}>Яблоко</button>
        <button onClick={(e) => addProduct(e, 502, 'Biscuit')}>Печенье</button>

        <ul className="food_list">
          {productsPerMeal?.map(({calories, food}) => (
            <li key={food}>
              <p className="food_list_text">{food}<span className="food_list_cal">{calories}</span> calories</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p><span className="calories">{caloriesPerMeal}</span> calories</p>
      </div>

    </fieldset>
  );
};

export default MealComponent;