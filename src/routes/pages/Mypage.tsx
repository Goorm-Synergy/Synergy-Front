import AnimatedModal from '@components/AnimatedModal';
import ActionColumn from '@components/Mypage/ActionColumn';
import CompanyList from '@components/Mypage/CompanyList';
import Information from '@components/Mypage/Information';
import MyPoint from '@components/Mypage/MyPoint';
import PointSystem from '@components/Mypage/PointSystem';
import RecentPoints from '@components/Mypage/RecentPoints';
import { styled } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAttendeePoints, useAttendeeProfile } from '@stores/server/attendee';

type ModalType = 'point-system' | 'my-point' | 'company-list' | null;

const Mypage = () => {
  const [modalOpen, setModalOpen] = useState<ModalType>(null);
  const navigate = useNavigate();
  const { data: myData } = useAttendeeProfile();
  const { data: myPoints } = useAttendeePoints();

  return (
    <Wrapper>
      <TopContainer>
        <HeaderText>F’LINK 2025</HeaderText>
        <Information
          {...myData.data}
          buttonClick={() => setModalOpen('point-system')}
        />
      </TopContainer>
      <BottomContainer>
        <ActionColumn
          onClick={() => setModalOpen('my-point')}
          text="포인트 적립 내역"
        />
        <RecentPoints data={myPoints.data.slice(0, 3)} />
        {myData.data.isHiringInterested && (
          <>
            <ActionColumn
              onClick={() => setModalOpen('company-list')}
              text="내 정보를 열람한 기업 (5)"
            />
            <ActionColumn
              onClick={() => navigate(`/my-info/${myData.data.attendeeId}`)}
              text="내 정보 보기"
            />
          </>
        )}

        <ActionColumn onClick={() => {}} text="비밀번호 변경" />
        <ActionColumn onClick={() => {}} text="로그아웃" />
      </BottomContainer>

      {/* 모달 */}
      <AnimatedModal
        open={modalOpen === 'point-system'}
        onClose={() => setModalOpen(null)}
      >
        <PointSystem />
      </AnimatedModal>

      <AnimatedModal
        open={modalOpen === 'my-point'}
        onClose={() => setModalOpen(null)}
      >
        <MyPoint data={myPoints.data} />
      </AnimatedModal>

      <AnimatedModal
        open={modalOpen === 'company-list'}
        onClose={() => setModalOpen(null)}
      >
        <CompanyList />
      </AnimatedModal>
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
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  backgroundColor: theme.palette.opacity.opa100,
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
