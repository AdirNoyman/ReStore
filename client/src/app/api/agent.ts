import { color } from '@mui/system';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'http://localhost:5000/api/';

// Getting the data from the response and storing it in a variable
const responseBody = (response: AxiosResponse) => response.data;

// Middleware for catching errors and manipulating the response
axios.interceptors.response.use(
	response => {
		return response;
	},
	(error: AxiosError) => {
		const { data, status } = error.response!;

		switch (status) {
			case 400:
				if (data.errors) {
					const modelStateErrors: string[] = [];
					for (const key in data.errors) {
						if (data.errors[key]) {
							modelStateErrors.push(data.errors[key]);
						}
					}
					// throw also causes return from the function
					throw modelStateErrors.flat();
				}
				toast.error(data.title);
				break;
			case 401:
				toast.error(data.title);
				break;
			case 500:
				toast.error(data.title);
				break;
			default:
				break;
		}

		console.log('caught by interceptor 😈');
		return Promise.reject(error.response);
	}
);

const requests = {
	get: (url: string) => axios.get(url).then(responseBody),
	post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
	put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
	delete: (url: string) => axios.delete(url).then(responseBody),
};

const Catalog = {
	list: () => requests.get('products'),
	details: (id: number) => requests.get(`products/${id}`),
};

const TestErrors = {
	get400Error: () => requests.get('buggy/bad-request'),
	get401Error: () => requests.get('buggy/unauthorized'),
	get404Error: () => requests.get('buggy/not-found'),
	getValidationError: () => requests.get('buggy/validation-error'),
	get500Error: () => requests.get('buggy/server-error'),
};

const agent = {
	Catalog,
	TestErrors,
};

export default agent;
