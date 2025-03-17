import { Typography, Box, Button } from '@mui/material';
import Header from '@components/AdminHeader';
import BoothBox from '@components/AdminPage/BoothBox';
import { css, useTheme } from '@mui/material/styles';
import { typography } from '@styles/foundation';
import AddIcon from '@mui/icons-material/Add';

const BoothDetail = () => {
  const theme = useTheme();
  const { palette, spacing } = theme;

  const pageStyle = css`
    display: flex;
    flex-direction: column;
    padding: ${spacing(2)};
  `;

  const titleStyle = css`
    color: ${palette.text.primary};
    font-family: ${typography.fontFamily.Pretendard};
    font-size: 26px;
    font-weight: bold;
  `;

  const registerButtonStyle = css`
    background-color: transparent;
    color: ${palette.text.quaternary};
    border-color: ${palette.border.secondary};
    border-radius: 18px;
    padding: 8px 16px;
    border: 1px solid ${palette.border.secondary};
  `;

  const BoothListStyle = css`
    display: flex;
    flex-direction: column;
    gap: ${spacing(2)}px;
  `;

  const handleRegisterClick = () => {
    //TODO: 부스 등록 모달 이동
  };

  const handleDeleteSession = () => {
    console.log('세션 삭제');
  };

  return (
    <Box css={pageStyle}>
      <Header />
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={2} mb={2}>
        <Typography variant="h4" css={titleStyle}>
          부스 참여 현황
        </Typography>
        <Button
          startIcon={<AddIcon />}
          onClick={handleRegisterClick}
          css={registerButtonStyle}
        >
          부스 등록
        </Button>
      </Box>

      {/* Booth List */}
      <Box css={BoothListStyle} sx={{gap: 2}}>
        {/* 예시 데이터 */}
        <BoothBox
          date="9/15"
          place="부스 A"
          title="DevWave"
          category="AI"
          chartData={[]}
          onDelete={handleDeleteSession}
        />
      </Box>
    </Box>
  );
};

export default BoothDetail;
