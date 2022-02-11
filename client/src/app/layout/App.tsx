import Catalog from '../../features/catalog/Catalog';
import ProductDetails from '../../features/catalog/ProductDetails';
import AboutPage from '../../features/about/AboutPage';
import ContactPage from '../../features/contact/ContactPage';
import Header from './Header';
import {
	Container,
	createTheme,
	CssBaseline,
	ThemeProvider,
} from '@mui/material';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../features/Home/HomePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const palleteType = darkMode ? 'dark' : 'light';

	const theme = createTheme({
		palette: {
			mode: palleteType,
			background: {
				default: darkMode ? '#121212' : '#eaeaea',
			},
		},
	});

	const handleThemeChange = () => {
		setDarkMode(!darkMode);
	};

	return (
		<ThemeProvider theme={theme}>
			<ToastContainer position='bottom-right' hideProgressBar />
			<CssBaseline />
			<Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
			<Container>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/catalog' element={<Catalog />} />
					<Route path='/catalog/:id' element={<ProductDetails />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='/contact' element={<ContactPage />} />
				</Routes>
			</Container>
		</ThemeProvider>
	);
}

export default App;
