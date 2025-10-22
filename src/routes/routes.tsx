import { createBrowserRouter } from 'react-router-dom';
import { NotFoundScreen } from '@/components/notFound';
import { Home } from '@/screens/home';

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '*',
		element: <NotFoundScreen />,
	},
]);
