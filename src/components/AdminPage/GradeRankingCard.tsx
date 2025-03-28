import { Box, Typography, Paper } from '@mui/material';
import { css, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const GradeRankingCard = () => {
  const { palette, typo, radius } = useTheme();
  return (
    <Box
      css={css`
        width: 100%;
        max-width: 300px;
        margin: 0 auto;
      `}
    >
      <Typography
        variant="subtitle1"
        css={css`
          ${typo.title.m}
          color: ${palette.text.primary};
          margin-bottom: 8px;
        `}
      >
        등급별 참가자 랭킹
      </Typography>
      <Paper
        css={css`
          background-color: ${palette.background.secondary};
          border-radius: ${radius.sm}px;
          padding: 16px;
          text-align: center;
          width: 100%;
          aspect-ratio: 1 / 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        <AddIcon
          css={css`
            font-size: 40px;
            color: ${palette.text.secondary};
            margin-bottom: 16px;
          `}
        />
        <Typography
          variant="body2"
          css={css`
            color: ${palette.text.secondary};
            font-family: ${typo.fontFamily.Pretendard};
            font-size: 14px;
            font-weight: 400;
          `}
        >
          컨퍼런스 등록 후 확인 가능합니다.
        </Typography>
      </Paper>
    </Box>
  );
};

export default GradeRankingCard;
