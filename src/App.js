import { useSelector } from 'react-redux';
import MealComponent from './Components/MealComponent/MealComponent';
import './App.css';

function App() {
  const totalCalories = useSelector(state => state.calories.totalCalories);
  console.log('App component render');

  return (
    <div>
    <header className="header">
        <div className="container">
          <nav>
            <ul className="menu">
              <li><a className="menu_item" href="/">Home</a></li>
              <li><a className="menu_item" href="/">Today</a></li>
              <li><a className="menu_item" href="/">Report</a></li>
              <li><a className="menu_item" href="/">Recipes</a></li>
            </ul>
          </nav>
      </div>
      </header>

      <main className="center">
        <div className="container">
          <form className="form_container">

            <MealComponent meal="Breakfast"/>
            <MealComponent meal="Lunch"/>
            <MealComponent meal="Dinner"/>
            <MealComponent meal="Snack"/>

            <div className="progress_bar_calories">
              <div>
                <p className="text">Calories today:</p>
                <progress className="progress_calories" value={totalCalories} max="2300"></progress>
              </div>
              <div>
                <p className="text text_calories"><span>{totalCalories}</span> / <span>2300</span></p>
              </div>
            </div>  
          </form>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
        </div>
      </footer>
      </div>
  );
}

export default App;
