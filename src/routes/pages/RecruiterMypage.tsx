import { Box, Typography, useTheme, css } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRecruiterProfile, useRecruiterAttendees } from '@stores/server/recruiter';
import CardContent from '@components/RecruiterPage/CardContent';
import { useLogoutMutation } from '@stores/server/auth';

const RecruiterMypage = () => {
  const { palette, typo } = useTheme();
  const navigate = useNavigate();
  const { data: recruiterProfile } = useRecruiterProfile();
  const { data: attendeesData } = useRecruiterAttendees({ liked: true });
  const { mutate: logout } = useLogoutMutation();

  const profileData = recruiterProfile?.data;
  const likedAttendees = attendeesData?.data?.list?.filter((attendee: any) => attendee.liked);

  const handleLikeUpdate = () => {
    useRecruiterAttendees({ liked: true });
  };

  const handleLogout = () => {logout();};

  return (
    <Box
      css={css`
        height: 100%;
        overflow-y: auto;
        border-radius: 0px 0px var(--radius-18, 18px) var(--radius-18, 18px);
        backdrop-filter: blur(5px);
      `}
    >
      <Box
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          background-color: ${palette.background.tertiary};
          padding: 24px;
          height: 357px;
          border-bottom-left-radius: 18px;
          border-bottom-right-radius: 18px;
        `}
      >
        <Typography
          css={css`
            font-size: 20px;
            text-align: center;
            font-weight: 800;
            font-family: ${typo.fontFamily.Montserrat};
            color: ${palette.text.primary};
          `}
        >
          F'LINK 2025
        </Typography>
        <img
          src={profileData?.companyPhotoUrl}
          alt="company logo"
          css={css`
            width: 100px;
            height: 100px;
            border-radius: 50%;
          `}
        />
        <Box textAlign="center">
          <Typography
            css={css`
              color: ${palette.text.primary};
              font-size: 24px;
              font-weight: 700;
              margin-bottom: 4px;
            `}
          >
            {profileData?.recruiterName} 님, 반갑습니다.
          </Typography>
          <Typography
            css={css`
              font-size: 14px;
              color: ${palette.text.secondary};
            `}
          >
            {profileData?.company} {profileData?.responsibility}
          </Typography>
        </Box>
        <Box
          css={css`
            margin-top: 12px;
            padding: 6px 16px;
            background-color: ${palette.background.quaternary};
            border-radius: 20px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 4px;
          `}
          onClick={handleLogout}
        >
          <LogoutOutlinedIcon 
            css={css`
              width: 16px;
              height: 16px;
              color: ${palette.icon.tertiary}
              `}
            />
          <Typography
            css={css`
              font-size: 14px;
              font-weight: 500;
              color: ${palette.text.primary};
            `}
          >
            로그아웃
          </Typography>
        </Box>
      </Box>

      <Box
        css={css`
          background-color: ${palette.background.primary};
          padding: 20px;
          
        `}
      >
        <Box
          css={css`
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
          `}
        >
          <Typography
            css={css`
              font-size: 16px;
              font-weight: 700;
              color: ${palette.text.primary};
            `}
          >
            내가 저장한 인재 ({likedAttendees.length})
          </Typography>
          <ArrowForwardIosIcon
            css={css`
              font-size: 16px;
              cursor: pointer;
              color: ${palette.icon.primary};
            `}
            onClick={() => navigate('/recruiter/main')}
          />
        </Box>


        <CardContent filters={{ liked: true }} onLikeUpdate={handleLikeUpdate} />
      </Box>
    </Box>
  );
};

export default RecruiterMypage;
