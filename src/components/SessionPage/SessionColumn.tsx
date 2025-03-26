import { css, styled, useTheme } from '@mui/material';
import { SessionContent } from '@routes/pages/SessionPage';
import { getTimeDifferenceText } from '@utils/time';
import { useNavigate } from 'react-router-dom';
import DefaultImage from '@assets/deafult-session-image.png';

const SessionColumn = ({
  id,
  title,
  speaker,
  speakerPosition,
  startTime,
  endTime,
  image,
}: SessionContent) => {
  const { palette, typo } = useTheme();
  const navigate = useNavigate();
  const flexrow = css`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `;
  return (
    <div
      css={css`
        width: 100%;
        cursor: pointer;
      `}
      onClick={() => navigate(`/session/${id}`)}
    >
      <StyledImage src={image || DefaultImage} />
      <div
        css={css`
          ${flexrow}
          ${typo.sub.s}
          color: ${palette.text.primary};
        `}
      >
        <span>{title}</span>
        <span>{startTime}</span>
      </div>
      <div
        css={css`
          ${flexrow}
          ${typo.body.s}
          color: ${palette.text.secondary};
        `}
      >
        <span>
          {speaker} {speakerPosition}
        </span>
        <span>{getTimeDifferenceText(startTime, endTime)}</span>
      </div>
    </div>
  );
};

export default SessionColumn;

const StyledImage = styled('img')(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.background.quaternary,
  height: '169px',
  marginBottom: '12px',
}));
