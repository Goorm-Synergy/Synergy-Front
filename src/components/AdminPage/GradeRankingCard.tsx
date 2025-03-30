import { Box, Typography, Paper, Button } from '@mui/material';
import { css, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useMembershipRanking } from '@stores/server/ranking';
import LevelRankingList from './Popup/LevelRankingList';
import { useState } from 'react';

export type UserRankDataType = {
  userId: number;
  attendeeName: string;
  membershipLevel: string;
  totalPoints: number;
};

const GradeRankingCard = () => {
  const { palette, typo, radius } = useTheme();
  const {
    data: { data },
  } = useMembershipRanking();

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
        `}
      >
        등급별 참가자 랭킹
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
            {data.content.slice(0, 9).map((item: UserRankDataType) => {
              return (
                <div
                  key={item.userId}
                  css={css`
                    display: flex;
                  `}
                >
                  <span css={{ marginRight: '50px' }}>
                    {translateLevel(item.membershipLevel)}
                  </span>
                  <span>{item.attendeeName}</span>
                  <span css={{ width: '100%', textAlign: 'end' }}>
                    {item.totalPoints}P
                  </span>
                </div>
              );
            })}
          </Box>
          <ModalOpenBtn setModalOpen={() => setModalOpen(true)} />
        </>
      </Paper>

      <LevelRankingList
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

const translateLevel = (membership: string) => {
  if (membership === 'PLATINUM') return 'PL';
  if (membership === 'GOLD') return 'GD';
  if (membership === 'SILVER') return 'SV';
  if (membership === 'BRONZE') return 'BZ';
  return 'DF';
};
