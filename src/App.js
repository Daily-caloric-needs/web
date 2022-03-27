import React from 'react';
import './App.css';

function App() {
  return (
    <div>
    <header class="header">
        <div class="container">
          <nav>
            <ul class="menu">
              <li><a class="menu_item" href="/">Home</a></li>
              <li><a class="menu_item" href="/">Today</a></li>
              <li><a class="menu_item" href="/">Report</a></li>
              <li><a class="menu_item" href="/">Recipes</a></li>
            </ul>
          </nav>
      </div>
      </header>

      <main class="center">
        <div class="container">
         <form class="form_container">
          <fieldset class="mealtime_container">
            <legend class="mealtime">Breakfast</legend>
            <div>
              <ul class="food_list">
                <li><p class="food_list_text"> yogurt<span class="food_list_cal"> 300</span> calories</p></li>
              </ul>
              <label for="breakfast">Add food</label>
              <input type="text" id="breakfast" />
            </div>
            <div>
              <p><span class="calories">300</span> calories</p>
            </div>
          </fieldset>

          <fieldset class="mealtime_container">
            <legend class="mealtime">Lunch</legend>
            <div>
              <label for="lunch">Add food</label>
              <input type="text" id="lunch" />
            </div>
            <div>
              <p><span class="calories">0</span> calories</p>
            </div>
          </fieldset>

          <fieldset class="mealtime_container">
            <legend class="mealtime">Dinner</legend>
            <div>
              <label for="dinner">Add food</label>
              <input type="text" id="dinner" />
            </div>
            <div>
              <p><span class="calories">0</span> calories</p>
            </div>
          </fieldset>

          <fieldset class="mealtime_container">
            <legend class="mealtime">Snack</legend>
            <div>
              <label for="snack">Add food</label>
              <input type="text" id="snack" />
            </div>
            <div>
              <p><span class="calories">0</span> calories</p>
            </div>
          </fieldset>

        <div class="progress_bar_calories">
          <div>
            <p class="text">Calories today:</p>
            <progress class="progress_calories" value="300" max="1500"></progress>
          </div>
          <div>
            <p class="text text_calories"><span>300</span> / <span>1500</span></p>
          </div>
        </div>  
        </form>
        </div>
      </main>

      <footer class="footer">
        <div class="container">
        </div>
      </footer>
      </div>
  );
}

export default App;
