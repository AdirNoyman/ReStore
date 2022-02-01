import { useEffect, useState } from 'react';
import { Product } from '../models/product';
import Catalog from '../../features/catalog/Catalog';
import { Typography } from '@mui/material';

function App() {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		fetch('http://localhost:5000/api/products')
			.then(response => response.json())
			.then(data => setProducts(data));
	}, []);

	const addProduct = () => {
		setProducts(prevState => [
			...products,
			{
				id: prevState.length + 1,
				name: 'product ' + (prevState.length + 1),
				price: 500 + (prevState.length + 1) * 100,
				brand: 'Coffeex',
				description: 'Cofoco dsasadsd',
				imageUrl: 'http://picsum.photos/200',
				quantityInStock: 100,
			},
		]);
	};

	return (
		<>
			<Typography variant='h1'>Re-Store App</Typography>
			<Catalog products={products} addProduct={addProduct} />
		</>
	);
}

export default App;
