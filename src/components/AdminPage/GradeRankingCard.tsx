import { Box, Typography, Paper, Button } from '@mui/material';
import { css, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useMembershipRanking } from '@stores/server/ranking';
import LevelRankingList from './Popup/LevelRankingList';
import { useState } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RankingModalOpenBtn from './RankingModalOpenBtn';

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
  const [isHovered, setIsHovered] = useState<boolean>(false);

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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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
        {data.content.length ? (
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
              {data.content.slice(0, 8).map((item: UserRankDataType) => {
                return (
                  <div
                    key={item.userId}
                    css={css`
                      display: flex;
                      align-items: center;
                      height: 20px;
                    `}
                  >
                    <span css={{ marginRight: '50px' }}>
                      {translateLevel(item.membershipLevel)}
                    </span>
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
            <RankingModalOpenBtn
              visible={isHovered}
              setModalOpen={() => setModalOpen(true)}
            />
          </>
        ) : (
          <Typography
            variant="body2"
            css={css`
              ${typo.body.l}
              color: ${palette.text.secondary};
            `}
          >
            집계된 사용자가 없습니다.
          </Typography>
        )}
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

const translateLevel = (membership: string) => {
  if (membership === 'PLATINUM') return 'PL';
  if (membership === 'GOLD') return 'GD';
  if (membership === 'SILVER') return 'SV';
  if (membership === 'BRONZE') return 'BZ';
  return 'DF';
};
