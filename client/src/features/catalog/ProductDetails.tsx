import {
	Divider,
	Grid,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	Typography,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import agent from '../../app/api/agent';
import { Product } from '../../app/models/product';

const ProductDetails = () => {
	const { id } = useParams<{ id: string }>();
	const [product, setProduct] = useState<Product | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// axios returns a promise

		agent.Catalog.details(parseInt(id!))
			.then(response => setProduct(response))
			.catch(error => console.log(error))
			.finally(() => setLoading(false));
		// we are gonna call useEffect when the components mount (that's the default behaviour) and when the 'id' parameter change (altough it's redundent here, because here it's not relevant because it will not change while we are in this page)
	}, [id]);

	if (loading) return <h3>Loading 🙄...</h3>;
	if (!product) return <h3>Product not found 😩</h3>;

	return (
		<Grid container spacing={6}>
			<Grid item xs={6}>
				<img
					src={product.imageUrl}
					alt={product.name}
					style={{ width: '100%' }}
				/>
			</Grid>
			<Grid item xs={6}>
				<Typography variant='h3'>{product.name}</Typography>
				<Divider sx={{ mb: 2 }} />
				<Typography variant='h4' color='secondary'>
					${(product.price / 100).toFixed(2)}
				</Typography>
				<TableContainer>
					<Table>
						<TableBody>
							<TableRow>
								<TableCell>Name</TableCell>
								<TableCell>{product.name}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Description</TableCell>
								<TableCell>{product.description}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Type</TableCell>
								<TableCell>{product.type}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Brand</TableCell>
								<TableCell>{product.brand}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Quantity in stock</TableCell>
								<TableCell>{product.quantityInStock}</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</Grid>
		</Grid>
	);
};

export default ProductDetails;
