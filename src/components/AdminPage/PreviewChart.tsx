import { Box, css, Paper, Typography, useTheme } from '@mui/material';

interface PreviewChartProps {
  data: Array<{
    title: string;
    currentAttendee: number;
    maximumAttendee: number;
  }>;
}

const PreviewChart = ({ data }: PreviewChartProps) => {
  const { palette, typo, radius } = useTheme();

  const styles = {
    date: css`
      ${typo.title.xs};
      color: ${palette.text.primary};
    `,
    now: css`
      ${typo.body.l};
      color: ${palette.text.tertiary};
    `,
    list: css`
      margin-top: 34px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    `,
  };

  return (
    <Paper
      css={css`
        width: 100%;
        text-align: center;
        color: ${palette.text.secondary};
        border-radius: ${radius.sm}px;
        background-color: ${palette.background.secondary};
        padding: 24px;
        border: ${palette.divider_custom.primary};
      `}
    >
      <Box css={{ width: '100%', overflowX: 'auto' }}>
        <div
          css={{
            minWidth: '520px',
          }}
        >
          <div css={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <Typography variant="body1" css={styles.date}>
              09/15
            </Typography>
            <Typography variant="body2" css={styles.now}>
              18:20 18시 기준
            </Typography>
          </div>
          <div css={styles.list}>
          {data.map((item, index) => (
              <ChartColumn
                key={index}
                text={`세션 ${index + 1}`}
                title={item.title}
                max={item.maximumAttendee}
                current={item.currentAttendee}
              />
            ))}
          </div>
        </div>
      </Box>
    </Paper>
  );
};

export default PreviewChart;

interface ChartColumnProps {
  max: number;
  current: number;
  text: string;
  title: string;
}
const ChartColumn = (props: ChartColumnProps) => {
  const { palette, typo } = useTheme();
  const percentage = Math.ceil((props.current / props.max) * 100);

  const styles = {
    container: css`
      display: flex;
      flex-direction: column;
      gap: 4px;
    `,
    graph: css`
      display: flex;
      justify-content: end;
      width: ${percentage}%;
      background-color: ${palette.graph.default};
      ${typo.sub.s}
      color: ${palette.text.primary};
      padding: 4px;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    `,
    textlist: css`
      display: flex;
      gap: 10px;
      color: ${palette.text.primary};
    `,
    bodyText: css`
      ${typo.body.l}
    `,
    subText: css`
      ${typo.sub.s}
    `,
    companyText: css`
      ${typo.body.m};
      font-weight: bold;
      color: ${palette.text.primary};
    `
  };
  return (
    <Box css={styles.container}>
      <div css={styles.graph}>{percentage}%</div>
      <div css={styles.textlist}>
        <span css={styles.bodyText}>{props.text}</span>
        <span css={styles.subText}>{props.title}</span>
        <span css={styles.bodyText}>{`${props.current}/${props.max}`}</span>
      </div>
    </Box>
  );
};
