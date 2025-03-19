import { css, Typography, useTheme } from '@mui/material';

const PointSystem = () => {
  const { palette, typo } = useTheme();
  const styles = {
    container: css`
      display: flex;
      flex-direction: column;
      gap: 26px;
    `,
    title: css`
      ${typo.title.m}
      color: ${palette.text.primary};
      margin-bottom: 26px;
    `,
    sub: css`
      ${typo.sub.l}
      color: ${palette.text.primary};
    `,
    content: css`
      display: flex;
      flex-direction: column;
      gap: 18px;
    `,
  };
  return (
    <div css={styles.container}>
      <Typography variant="h2" css={styles.title}>
        F’LINK 포인트 시스템
      </Typography>
      <div css={styles.content}>
        <Typography variant="h4" css={styles.sub}>
          포인트 적립 기준
        </Typography>
        <img src="" width={327} height={296} />
      </div>
      <div css={styles.content}>
        <Typography variant="h4" css={styles.sub}>
          등급별 혜택
        </Typography>
        <img src="" width={327} height={296} />
      </div>
    </div>
  );
};

export default PointSystem;
