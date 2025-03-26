import BackHeader from '@components/headers/BackHeader';
import SuccessPopup from '@components/SuccessPopup';
import { css, styled, Typography, useTheme } from '@mui/material';
import { useBoothDetail } from '@stores/server/booth';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DefaultImage from '@assets/default-booth-image.png';

const BoothDetails = () => {
  const { palette, typo } = useTheme();
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: { data },
  } = useBoothDetail(Number(id));
  console.log(data);

  const [qrSuccess, setQrSuccess] = useState(false);

  return (
    <>
      <BackHeader
        backgroundColor={palette.background.tertiary}
        onClick={() => navigate('/booth')}
        text="Booth"
      />
      <Container>
        <Typography
          variant="body1"
          color={palette.text.primary}
          css={css`
            ${typo.sub.s}
          `}
        >
          {data.boothNumber}
        </Typography>
        <Typography
          variant="h1"
          color={palette.text.primary}
          css={css`
            ${typo.title.m}
          `}
        >
          {data.companyName}
        </Typography>
        <Typography
          variant="body1"
          color={palette.text.secondary}
          css={css`
            ${typo.sub.xs}
            margin: 4px 0px;
          `}
        >
          {data.companyType}
        </Typography>
        <Typography
          variant="body1"
          color={palette.text.tertiary}
          css={css`
            ${typo.body.s}
          `}
        >
          {data.boothLocation}
        </Typography>
        <StyledImage src={data.image || DefaultImage} />
        <p
          css={css`
            ${typo.body.m}
            color: ${palette.text.primary};
          `}
        >
          {data.boothDescription}
        </p>
      </Container>

      {qrSuccess && (
        <SuccessPopup
          open={true}
          onClose={() => setQrSuccess(false)}
          title="부스에 오신 것을 환영합니다!"
          earnPoint={50}
          totalPoint={250}
          needPoint={50}
          rating="SILVER"
        />
      )}
    </>
  );
};

export default BoothDetails;

const Container = styled('div')(({ theme }) => ({
  padding: '20px 16px 16px',
  backgroundColor: theme.palette.background.tertiary,
  height: '100%',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}));

const StyledImage = styled('img')(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.background.primary,
  height: '187px',
  margin: '12px 0px 20px',
}));
