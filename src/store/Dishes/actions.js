export const REQUEST_DISHES_LOADING = 'DISHES::REQUEST_DISHES_LOADING';
export const REQUEST_DISHES_FILURE = 'DISHES::REQUEST_DISHES_FAILURE';
export const REQUEST_DISHES_SUCCESS = 'DISHES::REQUEST_DISHES_SUCCESS';

export const getDishesLoading = () => ({
	type: REQUEST_DISHES_LOADING,
});

export const getDishesFailure = (error) => ({
	type: REQUEST_DISHES_FILURE,
	payload: error,
});

export const getDishesSuccess = (dishes) => ({
	type: REQUEST_DISHES_SUCCESS,
	payload: dishes,
});

export const getDishes = () => async (dispatch) => {
	dispatch(getDishesLoading());

	try {
		const urlFetch = 'http://213.226.114.162/api/products';

		const response = await fetch(urlFetch);

		if (!response.ok) throw new Error('Ошибка: "Dishes service not worked"');

		const result = await response.json();
		console.log(result.data.length);
		dispatch(getDishesSuccess(result.data));
	} catch (err) {
		dispatch(getDishesFailure(err));
	}
};
