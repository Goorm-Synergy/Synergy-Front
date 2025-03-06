import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DefaultLayout from './layouts/Default';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import AdminLayout from './layouts/Admin';

const router = createBrowserRouter([
	{
		element: <DefaultLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/onboarding',
				element: <div>OnBoardingPage</div>,
			},
			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
	{
		element: <AdminLayout />,
		children: [
			{
				path: '/admin',
				element: <div>AdminPage</div>,
			},
			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
]);

export default function Router() {
	return <RouterProvider router={router} />;
}
