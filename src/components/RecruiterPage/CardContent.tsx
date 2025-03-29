import { useState } from 'react';
import { css, Box, Typography, useTheme, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useRecruiterAttendees, useLikeAttendee, useUnlikeAttendee } from '@stores/server/recruiter';
import { useNavigate } from 'react-router-dom';

interface CardContentProps {
  filters?: {
    page?: number;
    size?: number;
    sort?: string[];
    occupations?: string;
    educationLevel?: string;
    ageGroup?: string;
    experienceLevel?: string;
    regions?: string;
    liked?: boolean;
    [key: string]: any;
  };
      onLikeUpdate?: () => void;
}

const CardContent = ({ filters }: CardContentProps) => {
  const { data } = useRecruiterAttendees(filters);
  const { palette } = useTheme();
  const likeMutation = useLikeAttendee();
  const unlikeMutation = useUnlikeAttendee();
  const navigate = useNavigate();

  const [likedItems, setLikedItems] = useState<Record<number, boolean>>({});

  const truncateText = (text: string, length: number) => {
    if (text.length > length) {
      return text.substring(0, length) + '...';
    }
    return text;
  };

  const handleLikeClick = (attendeeId: number) => {
    setLikedItems((prev) => ({ ...prev, [attendeeId]: true }));
  
    likeMutation.mutate(attendeeId, {
      onError: () => {
        setLikedItems((prev) => ({ ...prev, [attendeeId]: false }));
      },
    });
  };
  
  const handleUnlikeClick = (attendeeId: number) => {
    setLikedItems((prev) => ({ ...prev, [attendeeId]: false }));
  
    unlikeMutation.mutate(attendeeId, {
      onError: () => {
        setLikedItems((prev) => ({ ...prev, [attendeeId]: true }));
      },
    });
  };
  

  const handleCardClick = (attendeeId: number) => {
    navigate(`/my-info/${attendeeId}`);
  };

  return (
    <Box
      css={css`
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        justify-content: flex-start;
      `}
    >
      {data.data.list
        .filter((attendee: any) => {
          if (filters && filters.liked !== undefined) {
            return attendee.liked === filters.liked;
          }
          return true;
        })
        .map((attendee: any) => (
        <Box
          key={attendee.attendeeId}
          css={css`
            background-color: ${palette.background.tertiary};
            display: flex;
            min-width: 166px;
            max-width: 280px;
            border-radius: 18px;
            padding: 24px;
            flex-direction: column;
            align-items: flex-start;
            flex: 1 0 0;
          `}
          onClick={() => handleCardClick(attendee.attendeeId)}
        >
          <Box
            css={css`
              display: flex;
              width: 70px;
              height: 98px;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              aspect-ratio: 5/7
              overflow: hidden;
              margin-bottom: 10px;
            `}
          >
            <img
              src={attendee.profileImageUrl}
              alt={`${attendee.name} 프로필 이미지`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>

          <Typography
            css={css`
              font-size: 16px;
              font-weight: 700;
              color: ${palette.text.primary};
              margin-bottom: 4px;
            `}
          >
            {attendee.name}
          </Typography>
          <Typography
            css={css`
              font-size: 14px;
              font-weight: 500;
              color: ${palette.text.primary};
              margin-bottom: 4px;
            `}
          >
            {attendee.desiredJobPosition}
          </Typography>
          <Typography
            css={css`
              font-size: 12px;
              color: ${palette.text.primary};
              margin-bottom: 12px;
              line-height: 1.4;
            `}
          >
            {truncateText(attendee.techStacks, 15)}
          </Typography>

          <Box
            css={css`
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
            `}
          >
            <Typography
              css={css`
                font-size: 12px;
                color: ${palette.text.secondary};
              `}
            >
              {attendee.experienceLevel}
            </Typography>
            <IconButton onClick={(e) => {
              e.stopPropagation();
              if (likedItems[attendee.attendeeId] || attendee.liked) {
                handleUnlikeClick(attendee.attendeeId);
              } else {
                handleLikeClick(attendee.attendeeId);
              }
            }}>
              {likedItems[attendee.attendeeId] || attendee.liked ? (
                <FavoriteIcon sx={{ color: '#EB5050', fontSize: 18 }} />
              ) : (
                <FavoriteBorderIcon sx={{ color: palette.text.secondary, fontSize: 18 }} />
              )}
            </IconButton>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CardContent;
