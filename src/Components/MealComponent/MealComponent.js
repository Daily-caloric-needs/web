import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTotalCalories, deleteTotalCalories } from "../../store/calories/actions";
import FoodSearch from "../FoodSearch";

const MealComponent = ({ meal }) => {
  console.log(`${meal} component render`);

  let totalCalories = useSelector(state => state.calories.totalCalories);
  const [productsPerMeal, setProductsPerMeal] = useState([]);
  const [caloriesPerMeal, setCaloriesPerMeal] = useState(0);
  const dispatch = useDispatch();

  const addProduct = (e, calories, food, amount) => {
    e.preventDefault();
    setProductsPerMeal(prevState => [...prevState, { calories: calories, food: food, amount: amount }]);
    setCaloriesPerMeal(prevState => prevState + calories);
    dispatch(addTotalCalories(totalCalories + calories));
  };

  //удаление всех добавленных продуктов разом
  //обнуление линни прогресса(кастылем)
  const deleteAll = (e, id) => {
    e.preventDefault();
    setProductsPerMeal(productsPerMeal.filter(product => product.id !== id))
    setCaloriesPerMeal(prevState => prevState = 0);
    dispatch(deleteTotalCalories(totalCalories = 0));
  }

  const deleteProfuct = (e, calories, food) => {
    // state.items.filter(({ id }) => id !== payload);
    // setProductsPerMeal(productsPerMeal.filter)
    e.preventDefault();
    console.log('Delete')
  }

  //  Добавление продукта +1
  const AddOne = (e, calories, food, amount) => {
    e.preventDefault();
    console.log('Add');
  }

  const styles = {
    li: {
      display: 'flex'
    },
    btn: {
      padding: '4px',
      marginRight: '10px',
      marginBottom: '10px'
    },
    delAll: {
      padding: '6px',
      marginTop: '10px',
      background: 'orange'
    },
    button: {
      padding: '5px',
      marginLeft: '10px'
    }

  }

  return (
    <fieldset className="mealtime_container">

      <legend className="mealtime">{meal}</legend>
      <div>
        <label htmlFor={meal}>Add food</label>
        <FoodSearch />

        <button style={styles.button} onClick={(e) => addProduct(e, 89, 'Banana', 1)}>Банан</button>
        <button style={styles.button} onClick={(e) => addProduct(e, 59, 'Yogurt', 1)}>Йогурт</button>
        <button style={styles.button} onClick={(e) => addProduct(e, 52, 'Apple', 1)}>Яблоко</button>
        <button style={styles.button} onClick={(e) => addProduct(e, 502, 'Biscuit', 1)}>Печенье</button>
        <ul className="food_list">
          {productsPerMeal?.map(({ calories, food, amount }) => (
            <li style={styles.li} key={food.id}>
              <button onClick={AddOne} style={styles.btn}>+</button>
              <button onClick={deleteProfuct} style={styles.btn}>-</button>
              <p className="food_list_text">{amount}{food}<span className="food_list_cal">{calories}</span> calories</p>
            </li>
          ))}
        </ul>
        <button onClick={deleteAll} style={styles.delAll}>Clear all</button>
      </div>

      <div>
        <p><span className="calories">{caloriesPerMeal}</span> calories</p>
      </div>

    </fieldset>
  );
};

export default MealComponent;