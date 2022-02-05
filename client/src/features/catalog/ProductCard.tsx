import {
	Avatar,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Typography,
} from '@mui/material';
import { bgcolor, fontSize, fontWeight, width } from '@mui/system';
import { Product } from '../../app/models/product';

interface Props {
	product: Product;
}

const ProductCard = ({ product }: Props) => {
	return (
		<Card sx={{ minWidth: 264 }}>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: 'secondary.main' }}>
						{product.name.charAt(0).toUpperCase()}
					</Avatar>
				}
				title={product.name}
				titleTypographyProps={{
					sx: { fontWeight: 'bold', color: 'primary.main' },
				}}
			/>
			<CardMedia
				component='img'
				sx={{
					height: '140',
					background: 'contain',
					bgcolor: 'primary.light',
				}}
				image={product.imageUrl}
				title={product.name}
			/>
			<CardContent>
				<Typography
					gutterBottom
					color='secondary'
					variant='h5'
					sx={{ fontSize: '1.4em' }}>
					${(product.price / 100).toFixed(2)}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{product.brand}/{product.type}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small'>Add to cart</Button>
				<Button size='small'>View</Button>
			</CardActions>
		</Card>
	);
};

export default ProductCard;
