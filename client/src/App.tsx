import { useEffect, useState } from 'react';

function App() {
	const [products, setProducts] = useState([
		{ name: 'product 1', price: 100.0 },
		{ name: 'product 2', price: 200.0 },
		{ name: 'product 3', price: 100.0 },
		{ name: 'product 4', price: 50.0 },
		{ name: 'product 5', price: 3000.0 },
	]);

	useEffect(() => {
		fetch('http://localhost:5000/api/products')
			.then(response => response.json())
			.then(data => setProducts(data));
	}, []);

	const addProduct = () => {
		setProducts([...products, { name: 'Coffee', price: 500 }]);
	};

	return (
		<div className='app'>
			<h1>Re-Store App 😎🤘</h1>
			<ul>
				{products.map((product, index) => {
					return (
						<li key={index}>
							name: {product.name}, price: {product.price}$
						</li>
					);
				})}
			</ul>
			<button onClick={addProduct}>Add Coffee 🤩</button>
		</div>
	);
}

export default App;
