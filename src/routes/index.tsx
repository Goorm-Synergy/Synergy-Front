import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DefaultLayout from './layouts/Default';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import AdminLayout from './layouts/Admin';
import DefaultNavLayout from './layouts/DefaultNav';
// import OnBoarding from './pages/OnBoarding';

const router = createBrowserRouter([
  {
    element: <DefaultNavLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/session',
        element: <>session</>,
      },
      {
        path: '/booth',
        element: <>booth</>,
      },
    ],
  },
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/onboarding',
        element: <></>,
      },
      {
        path: '/session/:id',
        element: <>/session/:id</>,
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
