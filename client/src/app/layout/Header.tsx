import { ShoppingCart } from '@mui/icons-material';
import {
	AppBar,
	Toolbar,
	Typography,
	Switch,
	List,
	ListItem,
	IconButton,
	Badge,
	Box,
} from '@mui/material';
import { color } from '@mui/system';
import { NavLink } from 'react-router-dom';

interface Props {
	darkMode: boolean;
	handleThemeChange: () => void;
}

const midlinks = [
	{ title: 'catalog', path: '/catalog' },
	{ title: 'about', path: '/about' },
	{ title: 'contact', path: '/contact' },
];
const rightlinks = [
	{ title: 'login', path: '/login' },
	{ title: 'register', path: '/register' },
];

const navStyles = {
	color: 'inherit',
	textDecoration: 'none',
	typography: 'h6',
	'&:hover': {
		color: 'grey.500',
	},
	'&.active': {
		color: 'text.secondary',
	},
};

const Header = ({ darkMode, handleThemeChange }: Props) => {
	return (
		<AppBar position='sticky' sx={{ mb: 4 }}>
			<Toolbar
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}>
				<Box display='flex' alignItems='center'>
					<Typography
						variant='h6'
						component={NavLink}
						to={'/'}
						sx={navStyles}>
						ADIR-STORE
					</Typography>
					<Switch
						checked={darkMode}
						onChange={handleThemeChange}
						inputProps={{ 'aria-label': 'controlled' }}
					/>
				</Box>

				<List sx={{ display: 'flex' }}>
					{midlinks.map(({ title, path }) => (
						<ListItem
							component={NavLink}
							to={path}
							key={path}
							sx={navStyles}>
							{title.toUpperCase()}
						</ListItem>
					))}
				</List>
				<Box display='flex' alignItems='center'>
					<IconButton size='large' sx={{ color: 'inherit' }}>
						<Badge badgeContent={4} color='secondary'>
							<ShoppingCart />
						</Badge>
					</IconButton>
					<List sx={{ display: 'flex' }}>
						{rightlinks.map(({ title, path }) => (
							<ListItem
								component={NavLink}
								to={path}
								key={path}
								sx={navStyles}>
								{title.toUpperCase()}
							</ListItem>
						))}
					</List>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
