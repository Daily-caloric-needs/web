import React from 'react';
import './App.css';
import FoodSearch from './Components/FoodSearch';

function App() {
	return (
		<div>
			<header className="header">
				<div className="container">
					<nav>
						<ul className="menu">
							<li>
								<a className="menu_item" href="/">
									Home
								</a>
							</li>
							<li>
								<a className="menu_item" href="/">
									Today
								</a>
							</li>
							<li>
								<a className="menu_item" href="/">
									Report
								</a>
							</li>
							<li>
								<a className="menu_item" href="/">
									Recipes
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>

			<main className="center">
				<div className="container">
					<form className="form_container">
						<fieldset className="mealtime_container">
							<legend className="mealtime">Breakfast</legend>
							<div>
								<ul className="food_list">
									<li>
										<p className="food_list_text">
											{' '}
											yogurt<span className="food_list_cal"> 300</span> calories
										</p>
									</li>
								</ul>
								<label htmlFor="breakfast">Add food</label>
								{/* <input type="text" id="breakfast" /> */}
								<FoodSearch />
							</div>
							<div>
								<p>
									<span className="calories">300</span> calories
								</p>
							</div>
						</fieldset>

						<fieldset className="mealtime_container">
							<legend className="mealtime">Lunch</legend>
							<div>
								<label htmlFor="lunch">Add food</label>
								<input type="text" id="lunch" />
							</div>
							<div>
								<p>
									<span className="calories">0</span> calories
								</p>
							</div>
						</fieldset>

						<fieldset className="mealtime_container">
							<legend className="mealtime">Dinner</legend>
							<div>
								<label htmlFor="dinner">Add food</label>
								<input type="text" id="dinner" />
							</div>
							<div>
								<p>
									<span className="calories">0</span> calories
								</p>
							</div>
						</fieldset>

						<fieldset className="mealtime_container">
							<legend className="mealtime">Snack</legend>
							<div>
								<label htmlFor="snack">Add food</label>
								<input type="text" id="snack" />
							</div>
							<div>
								<p>
									<span className="calories">0</span> calories
								</p>
							</div>
						</fieldset>

						<div className="progress_bar_calories">
							<div>
								<p className="text">Calories today:</p>
								<progress className="progress_calories" value="300" max="1500"></progress>
							</div>
							<div>
								<p className="text text_calories">
									<span>300</span> / <span>1500</span>
								</p>
							</div>
						</div>
					</form>
				</div>
			</main>

			<footer className="footer">
				<div className="container"></div>
			</footer>
		</div>
	);
}

export default App;
