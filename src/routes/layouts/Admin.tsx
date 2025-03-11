import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '@components/AdminHeader';
const AdminLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollRestoration />
    </>
  );
};

export default AdminLayout;
