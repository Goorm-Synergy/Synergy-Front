import ActionColumn from '@components/Mypage/ActionColumn';
import Information from '@components/Mypage/Information';
import RecentPoints from '@components/Mypage/RecentPoints';
import { styled } from '@mui/material';

const Mypage = () => {
  return (
    <Wrapper>
      <TopContainer>
        <HeaderText>F’LINK 2025</HeaderText>
        <Information />
      </TopContainer>
      <BottomContainer>
        <ActionColumn onClick={() => {}} text="포인트 적립 내역" />
        <RecentPoints />
        <ActionColumn onClick={() => {}} text="내 정보 보기" />
        <ActionColumn onClick={() => {}} text="비밀번호 변경" />
        <ActionColumn onClick={() => {}} text="로그아웃" />
      </BottomContainer>
    </Wrapper>
  );
};

export default Mypage;

const Wrapper = styled('div')(() => ({
  height: '100%',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}));

const TopContainer = styled('div')(({ theme }) => ({
  position: 'sticky',
  top: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  backgroundColor: theme.palette.background.secondary,
  width: '100%',
  padding: '24px',
  height: '357px',
  borderBottomLeftRadius: '18px',
  borderBottomRightRadius: '18px',
  zIndex: 100,
}));

const HeaderText = styled('header')(({ theme }) => ({
  ...theme.typo.title.xs,
  fontFamily: theme.typo.fontFamily.Montserrat,
  color: theme.palette.text.primary,
}));

const BottomContainer = styled('div')(() => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: 'fit-content',
  borderBottomLeftRadius: '18px',
  borderBottomRightRadius: '18px',
  marginTop: '7px',
}));
