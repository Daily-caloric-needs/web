import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Diary } from '../Diary/Diary';
import { Home } from '../Home/Home';
import { Recipes } from '../Recipes/Recipes';
import { NotFound } from '../NotFound/NotFound';
import { Profile } from '../Profile/Profile';
import { AuthPage } from '../Registration';
import { addUserData } from "../../store/UserData/actions";
import './style.scss';

export const Routers = () => {
	const dispatch = useDispatch();

	useEffect(() => {
      const userDataStr = localStorage.getItem('userData');
      if (userDataStr) {
			const userDataObj = JSON.parse(userDataStr);
      dispatch(addUserData(userDataObj));
      }
   }, []);

	return (
		<BrowserRouter className="router">
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/diary" element={<Diary />} />
				<Route exact path="/profile" element={<Profile />} />
				<Route exact path="/login" element={<AuthPage id="login"/>} />
				<Route exact path="/registration" element={<AuthPage id="registration"/>} />
				<Route exact path="/recipes" element={<Recipes />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};
