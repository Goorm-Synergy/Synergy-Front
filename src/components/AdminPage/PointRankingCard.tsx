import { Box, Typography, Paper, Button } from '@mui/material';
import { css, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PointRankingList from './Popup/PointRankingList';
import { useState } from 'react';
import { usePointRanking } from '@stores/server/ranking';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export type UserPointDataType = {
  attendeeName: string;
  totalPoints: number;
};

const GradeRankingCard = () => {
  const { palette, typo, radius } = useTheme();
  const {
    data: { data },
  } = usePointRanking();
  console.log(data);

  const [modalOpen, setModalOpen] = useState<boolean>(false);

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
          text-align: left;
        `}
      >
        누적 포인트 랭킹
      </Typography>
      <Paper
        css={css`
          position: relative;
          background-color: ${palette.background.secondary};
          border-radius: ${radius.xl};
          padding: 24px;
          text-align: center;
          width: 100%;
          aspect-ratio: 1 / 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        {/* <AddIcon
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
        </Typography> */}
        <>
          <Box
            css={css`
              display: flex;
              flex-direction: column;
              gap: 10px;
              color: ${palette.text.primary};
              width: 100%;
              height: 100%;
            `}
          >
            {data.content
              .slice(0, 8)
              .map((item: UserPointDataType, idx: number) => {
                return (
                  <div
                    key={idx}
                    css={css`
                      display: flex;
                      align-items: center;
                      height: 20px;
                    `}
                  >
                    <span css={{ marginRight: '50px' }}>{idx + 1}</span>
                    <span>{item.attendeeName}</span>
                    <span css={{ width: '100%', textAlign: 'end' }}>
                      {item.totalPoints}P
                    </span>
                    <button
                      css={css`
                        position: relative;
                        top: -2px;
                        left: 10px;
                      `}
                      onClick={() => {}}
                    >
                      <ChevronRightIcon
                        fontSize="small"
                        sx={{
                          color: palette.icon.primary,
                        }}
                      />
                    </button>
                  </div>
                );
              })}
          </Box>
          <ModalOpenBtn setModalOpen={() => setModalOpen(true)} />
        </>
      </Paper>

      <PointRankingList
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        data={data.content}
      />
    </Box>
  );
};

export default GradeRankingCard;

const ModalOpenBtn = ({ setModalOpen }: { setModalOpen: () => void }) => {
  const { palette, typo } = useTheme();
  return (
    <Button
      css={css`
        position: absolute;
        transform: translateX(-50%);
        left: 50%;
        ${typo.sub.s}
        background-color: ${palette.background.quaternary};
        color: ${palette.text.secondary};
        border: none;
        padding: 8px 16px;
        border-radius: 18px;
        bottom: 10px;
      `}
      onClick={setModalOpen}
    >
      더 보기
    </Button>
  );
};
