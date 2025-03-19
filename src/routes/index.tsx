import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DefaultLayout from './layouts/Default';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import AdminLayout from './layouts/Admin';
import LoginPage from './pages/ParticipantLoginPage';
import RoleSelectionPage from './pages/RoleSelectionPage';
import AdminLoginPage from './pages/AdminLoginPage';
import SignupPage from './pages/SignupPage';
import FindIdPage from './pages/FindIdPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import OnBoarding from './pages/OnBoarding';
import DefaultNavLayout from './layouts/DefaultNav';
import SessionDetail from './pages/Session';
import BoothDetail from './pages/Booth';
import Mypage from './pages/Mypage';
import SessionDetails from './pages/SessionDetails';
import BoothPage from './pages/BoothPage';
import BoothDetails from './pages/BoothDetails';
import SessionPage from './pages/SessionPage';

const router = createBrowserRouter([
  {
    element: <DefaultNavLayout />,
    children: [
      {
        path: '/mypage',
        element: <Mypage />,
      },
      {
        path: '/session',
        element: <SessionPage />,
      },
      {
        path: '/booth',
        element: <BoothPage />,
      },
    ],
  },
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/participant-login',
        element: <LoginPage />,
      },
      {
        path: '/role-selection',
        element: <RoleSelectionPage />,
      },
      {
        path: '/admin-login',
        element: <AdminLoginPage />,
      },
      {
        path: '/signup',
        element: <SignupPage />,
      },
      {
        path: '/find-id',
        element: <FindIdPage />,
      },
      {
        path: '/reset-password',
        element: <ResetPasswordPage />,
      },
      {
        path: '/onboarding',
        element: <OnBoarding />,
      },
      {
        path: '/session/:id',
        element: <SessionDetails />,
      },
      {
        path: '/booth/:id',
        element: <BoothDetails />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: '/admin/session' /* 추후 뺄 예정 */,
        element: <SessionDetail />,
      },
      {
        path: '/admin/booth' /* 추후 뺄 예정 */,
        element: <BoothDetail />,
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
