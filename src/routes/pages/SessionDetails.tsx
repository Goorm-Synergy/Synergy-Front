import BackHeader from '@components/headers/BackHeader';
import Information from '@components/SessionPage/Information';
import QnaSection from '@components/SessionPage/QnaSection';
import SuccessPopup from '@components/SuccessPopup';
import { useQrVerifyCheck } from '@hooks/useQrVerifyCheck';
import { styled, useTheme } from '@mui/material';
import { useSessionDetail } from '@stores/server/session';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SessionDetails = () => {
  const { palette } = useTheme();
  const navigate = useNavigate();
  const { id } = useParams();

  const [qrSuccess, setQrSuccess] = useState(false);
  const [qnaSuccess, setQnaSuccess] = useState(false);

  const { isChecked } = useQrVerifyCheck({
    isAlreadyVerifyed: true,
    onQrSuccess: () => {
      navigate(`/session/${id}`);
      setQrSuccess(true);
    },
  });

  const { data } = useSessionDetail(Number(id), isChecked);

  if (!data) {
    return <></>;
  }

  return (
    <>
      <BackHeader
        backgroundColor={palette.background.tertiary}
        onClick={() => navigate('/session')}
        text="Session"
      />
      <Container>
        {/* Session Information */}
        <Information
          id={data.data.sessionId}
          title={data.data.title}
          speaker={data.data.speaker}
          speakerPosition={data.data.speakerPosition}
          startTime={data.data.startTime}
          endTime={data.data.endTime}
          image={data.data.imageUrl}
          description={data.data.description}
        />

        {/* Q&A */}
        <QnaSection
          qnaData={data.data.questionResDto}
          onSuccess={() => setQnaSuccess(true)}
        />
      </Container>

      {qnaSuccess && (
        <SuccessPopup
          open={true}
          onClose={() => setQnaSuccess(false)}
          title="질문을 제출하였습니다."
          earnPoint={50}
        />
      )}

      {qrSuccess && (
        <SuccessPopup
          open={true}
          onClose={() => setQrSuccess(false)}
          title="세션에 오신 것을 환영합니다!"
          earnPoint={30}
        />
      )}
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
