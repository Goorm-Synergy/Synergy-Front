import { Outlet, ScrollRestoration } from 'react-router-dom';
import { css, useTheme } from '@mui/material';

const AdminLayout = () => {
  const { palette } = useTheme();
  return (
    <div
      css={css`
        min-height: 100vh;
        min-height: 100svh;
        max-width: 600px;
        margin: 0 auto;
        padding: 1rem;
        box-shadow: 0 0 20px #0000000d;
        position: relative;
        background-color: ${palette.background.primary};
      `}
    >
      <Outlet />
      <ScrollRestoration />
    </div>
  );
};

export default AdminLayout;
