import { useState } from 'react';

const products = [
	{ productName: 'Apple', calories: 0 },
	{ productName: 'Banana', calories: 10 },
];

const FoodSearch = () => {
	const [foodName, setFoodName] = useState('');
	const [product, setProduct] = useState();

	const onClick = (e) => {
		e.preventDefault();
		const findFood = products.find((product) => {
			return product.productName === foodName;
		});

		setProduct(findFood);
	};

	return (
		<div>
			<input value={foodName} onChange={(e) => setFoodName(e.target.value)} />
			<button onClick={(e) => onClick(e)}>Find</button>
			<div>
				{product && product.productName} {product && product.calories}
			</div>
		</div>
	);
};

export default FoodSearch;
