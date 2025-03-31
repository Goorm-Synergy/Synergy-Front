import { Outlet, ScrollRestoration } from 'react-router-dom';
import { css, useTheme, Box } from '@mui/material';
import Header from '@components/headers/AdminHeader';
import UserCounts from '@components/AdminPage/UserCount';
import SessionParticipation from '@components/AdminPage/SessionParticipation';
import BoothParticipation from '@components/AdminPage/BoothParticipation';
import GradeRankingCard from '@components/AdminPage/GradeRankingCard';
import PointRankingCard from '@components/AdminPage/PointRankingCard';
import ConferenceRegistration from '@components/AdminPage/RegButtons';

const AdminLayout = () => {
  const { palette } = useTheme();
  return (
    <>
      <Header />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          max-width: 600px;
          margin: 0 auto;
          gap: 30px;
          padding: 100px 1rem 1rem;
          background-color: ${palette.background.primary};
        `}
      >
        <UserCounts />
        <SessionParticipation />
        <BoothParticipation />
        <Box
          css={css`
            display: flex;
            gap: 30px;
            flex-wrap: wrap;
          `}
        >
          <Box css={{ flex: 1, minWidth: '250px' }}>
            <GradeRankingCard />
          </Box>
          <Box css={{ flex: 1, minWidth: '250px' }}>
            <PointRankingCard />
          </Box>
        </Box>
        <ConferenceRegistration />
        <Outlet />
        <ScrollRestoration />
      </div>
    </>
  );
};

export default AdminLayout;
