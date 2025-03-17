import BackHeader from '@components/headers/BackHeader';
import Information from '@components/SessionPage/Information';
import QnaSection from '@components/SessionPage/QnaSection';
import { styled, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SessionDetails = () => {
  const { palette } = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <BackHeader
        backgroundColor={palette.background.tertiary}
        onClick={() => navigate('/session')}
        text="Session"
      />
      <Container>
        {/* Session Information */}
        <Information />

        {/* Q&A */}
        <QnaSection />
      </Container>
    </>
  );
};

export default SessionDetails;

const Container = styled('div')(({ theme }) => ({
  padding: '20px 16px 16px',
  backgroundColor: theme.palette.background.tertiary,
  height: '100%',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}));
