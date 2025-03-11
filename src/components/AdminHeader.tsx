import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Logo = styled(Typography)`
  flex-grow: 1;
  background-color: transparent;
  padding: 5px 10px;
`;

const NavLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
  position: 'relative',
  padding: '8px 16px',
  borderRadius: '4px',
  '&:hover': {
    textDecoration: 'underline',
  },
  ...(active && {
    fontWeight: 'bold',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -2,
      left: 0,
      width: '100%',
      height: 2,
      backgroundColor: 'black',
    },
    '&:hover': {
      textDecoration: 'none',
    },
  }),
}));

const LogoutButton = styled('button')(({ theme }) => ({
  color: theme.palette.text.primary,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '8px 16px',
  fontSize: '1rem',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    //TODO: 로그아웃 로직
    navigate('/role-selection');
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }}
    >
      <Toolbar>
        <Logo variant="h6">F'LINK</Logo>
        <NavLink
          to="/dashboard"
          active={location.pathname === '/admin'}
        >
          대시보드
        </NavLink>
        <LogoutButton onClick={handleLogout}>
          로그아웃
        </LogoutButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
