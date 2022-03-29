import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTotalCalories } from "../../actions/addCaloriesAction";
import { deleteCalories } from "../../actions/deleteProduct";

const MealComponent = ({ meal }) => {
  console.log(`${meal} component render`);

  let totalCalories = useSelector(state => state.calories.totalCalories);
  const [productsPerMeal, setProductsPerMeal] = useState([]);
  const [caloriesPerMeal, setCaloriesPerMeal] = useState(0);
  const dispatch = useDispatch();

  const addProduct = (e, calories, food) => {
    e.preventDefault();
    setProductsPerMeal(prevState => [...prevState, { calories: calories, food: food }]);
    setCaloriesPerMeal(prevState => prevState + calories);
    dispatch(addTotalCalories(totalCalories + calories));
  };

  //удаление всех добавленных продуктов разом
  //обнуление линни прогресса(кастылем)
    const deleteAll = (e, id) => {
      e.preventDefault();
      setProductsPerMeal(productsPerMeal.filter(product => product.id !== id))
      setCaloriesPerMeal(prevState => prevState = 0);
      dispatch(deleteCalories(totalCalories = 0));
    }

  const deleteProfuct = (e, calories, food) => {
    // state.items.filter(({ id }) => id !== payload);
    // setProductsPerMeal(productsPerMeal.filter)
    e.preventDefault();
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
    delAll:{
      padding: '6px',
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

        <button style={styles.button} onClick={(e) => addProduct(e, 89, 'Banana')}>Банан</button>
        <button style={styles.button} onClick={(e) => addProduct(e, 59, 'Yogurt')}>Йогурт</button>
        <button style={styles.button} onClick={(e) => addProduct(e, 52, 'Apple')}>Яблоко</button>
        <button style={styles.button} onClick={(e) => addProduct(e, 502, 'Biscuit')}>Печенье</button>

        <ul className="food_list">
          {productsPerMeal?.map(({ calories, food }) => (
            //style="display: flex"  style="padding: 5px, margin-right: 10px"/*<button onClick={deleteProfuct} style={styles.btn}>&times;</button>*/
            <li style={styles.li} key={food.id}>
              <button style={styles.btn}>+</button>
              <button style={styles.btn}>-</button>
              
              <p className="food_list_text">{food}<span className="food_list_cal">{calories}</span> calories</p>
            </li>
          ))}
        </ul>
        <button onClick={deleteAll} style={styles.delAll}>Delete all</button>
      </div>

      <div>
        <p><span className="calories">{caloriesPerMeal}</span> calories</p>
      </div>

    </fieldset>
  );
};

export default MealComponent;