import {
	Avatar,
	Button,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
} from '@mui/material';
import { Product } from '../../app/models/product';

interface Props {
	products: Product[];
	addProduct: () => void;
}

const Catalog = ({ products, addProduct }: Props) => {
	return (
		<>
			<List>
				{products.map(product => {
					return (
						<ListItem key={product.id}>
							<ListItemAvatar>
								<Avatar src={product.imageUrl} />
							</ListItemAvatar>
							<ListItemText>
								{product.name} - {product.price}
							</ListItemText>
						</ListItem>
					);
				})}
			</List>
			<Button variant='contained' onClick={addProduct}>
				Add Coffee 🤩
			</Button>
		</>
	);
};

export default Catalog;
