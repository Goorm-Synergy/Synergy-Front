import BackHeader from '@components/headers/BackHeader';
import BasicInformation from '@components/MyInfoPage/BasicInformation';
import OtherInformation from '@components/MyInfoPage/OtherInformation';
import { styled, useTheme } from '@mui/material';
import { useAuthStore } from '@stores/client/useAuthStore';
import { useAttendeeDetailInfo } from '@stores/server/attendee';
import { useNavigate } from 'react-router-dom';

const MyInfo = () => {
  const { palette } = useTheme();
  const navigate = useNavigate();

  useAuthStore.getState().setAuth({
    'accessToken': import.meta.env.VITE_AUTH_TOKEN,
    'identifier': 'jiwon.kim@example.com',
    'role': 'ATTENDEE',
    'id': 1,
  });

  const {
    data: { data },
  } = useAttendeeDetailInfo({
    identifier: useAuthStore.getState().user.identifier,
    id: useAuthStore.getState().user.id,
  });

  return (
    <>
      <BackHeader
        backgroundColor={palette.background.tertiary}
        onClick={() => navigate(-1)}
      />
      <Container>
        <BasicInformation {...data.baseInfo} />
        <OtherInformation {...data.detailInfo} />
      </Container>
    </>
  );
};

export default MyInfo;

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 16px 16px',
  backgroundColor: theme.palette.background.tertiary,
  height: '100%',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}));
