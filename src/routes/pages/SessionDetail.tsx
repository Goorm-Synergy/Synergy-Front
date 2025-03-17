import { Typography, Box, Button } from '@mui/material';
import Header from '@components/AdminHeader';
import SessionBox from '@components/AdminPage/SessionBox';
import { css, useTheme } from '@mui/material/styles';
import { typography } from '@styles/foundation';
import AddIcon from '@mui/icons-material/Add';

const SessionDetail = () => {
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
    flex: 1;
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

  const sessionListStyle = css`
    display: flex;
    flex-direction: column;
    gap: ${spacing(2)}px;
  `;

  const handleRegisterClick = () => {
    //TODO: 세션 등록 모달 이동
  };

  const handleDeleteSession = () => {
    console.log('세션 삭제');
  };

  return (
    <Box css={pageStyle}>
      <Header />

      <Box display="flex" justifyContent="space-between" alignItems="center" mt={2} mb={2}>
        <Typography variant="h4" css={titleStyle}>
          세션 참여 현황
        </Typography>
        <Button
          startIcon={<AddIcon />}
          onClick={handleRegisterClick}
          css={registerButtonStyle}
        >
          세션 등록
        </Button>
      </Box>

      {/* Session List */}
      <Box css={sessionListStyle} sx={{gap: 2}}>
        <SessionBox
          date="9/15"
          place="세션 1-1"
          title="최신 기술 동향"
          time="10:30-11:30"
          speaker="김지혁"
          chartData={[]}
          onDelete={handleDeleteSession}
        />
        <SessionBox
          date="9/15"
          place="세션 1-2"
          title="최신 기술 동향"
          time="10:30-11:30"
          speaker="홍길동"
          chartData={[]}
          onDelete={handleDeleteSession}
        />
      </Box>
    </Box>
  );
};

export default SessionDetail;
