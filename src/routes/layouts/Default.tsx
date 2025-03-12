import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import { css, useTheme } from '@mui/material';

export default function DefaultLayout() {
  const { palette } = useTheme();
  const location = useLocation();

  const isOnboarding = location.pathname === '/onboarding';

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        min-height: 100%;
        max-width: 600px;
        margin: 0 auto;
        padding: 1rem;
        box-shadow: 0 0 20px #0000000d;
        background-color: ${isOnboarding
          ? palette.background.tertiary
          : palette.background.primary};
      `}
    >
      <Outlet />
      <ScrollRestoration />
    </div>
  );
}
