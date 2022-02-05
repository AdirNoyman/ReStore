import { AppBar, Toolbar, Typography, Switch } from '@mui/material';

interface Props {
	darkMode: boolean;
	handleThemeChange: () => void;
}

const Header = ({ darkMode, handleThemeChange }: Props) => {
	return (
		<AppBar position='sticky' sx={{ mb: 4 }}>
			<Toolbar>
				<Typography variant='h6'>ADIR-STORE</Typography>
				<Switch
					checked={darkMode}
					onChange={handleThemeChange}
					inputProps={{ 'aria-label': 'controlled' }}
				/>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
