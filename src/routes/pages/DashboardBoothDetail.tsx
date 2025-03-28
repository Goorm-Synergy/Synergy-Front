import { useEffect, useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import Header from '@components/headers/AdminHeader';
import BoothBox from '@components/AdminPage/BoothBox';
import { css, useTheme } from '@mui/material/styles';
import { typography } from '@styles/foundation';
import AddIcon from '@mui/icons-material/Add';
import AddBooth from '@components/AdminPage/Popup/AddBooth';
import { fetchBoothList } from '@api/booth-controller';

interface BoothData {
  id: number;
  date: string;
  place: string;
  companyName: string;
  companyType: string;
  chartData?: any[];
}

const DashboardBoothDetail = () => {
  const theme = useTheme();
  const { palette, spacing } = theme;
  const [isAddBoothOpen, setIsAddBoothOpen] = useState(false);
  const [editMode, setEditMode] = useState<'add' | 'edit'>('add');
  const [editData, setEditData] = useState<any | null>(null);
  const [booths, setBooths] = useState<BoothData[]>([]);

  const loadBooths = async () => {
    try {
      const response = await fetchBoothList(); //TODO: 부스별 상세 참여율 조회로 수정 필요
      setBooths(response.data);
    } catch (error) {
      console.error('부스 데이터를 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    loadBooths();
  }, []);

  const handleRegisterClick = () => {
    setEditMode('add');
    setEditData(null);
    setIsAddBoothOpen(true);
  };

  const handleCloseAddBooth = () => {
    setIsAddBoothOpen(false);
  };

  const handleEditBooth = (boothInfo: any) => {
    setEditMode('edit');
    setEditData(boothInfo);
    setIsAddBoothOpen(true);
  };

  const handleDeleteSession = (boothId: number) => {
    console.log('세션 삭제');
  };

  const pageStyle = css`
    display: flex;
    flex-direction: column;
    padding: ${spacing(2)};
    padding-top: 80px;
  `;

  const titleStyle = css`
    color: ${palette.text.primary};
    font-family: ${typography.fontFamily.Pretendard};
    font-size: 26px;
    font-weight: bold;
  `;

  const registerButtonStyle = css`
    background-color: transparent;
    color: ${palette.text.quaternary};
    border-color: ${palette.border.secondary};
    border-radius: 18px;
    padding: 8px 16px;
    border: 1px solid ${palette.border.secondary};
  `;

  const BoothListStyle = css`
    display: flex;
    flex-direction: column;
    gap: ${spacing(2)}px;
  `;

  return (
    <Box css={pageStyle}>
      <Header />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={2}
        mb={2}
      >
        <Typography variant="h4" css={titleStyle}>
          부스 참여 현황
        </Typography>
        <Button
          startIcon={<AddIcon />}
          onClick={handleRegisterClick}
          css={registerButtonStyle}
        >
          부스 등록
        </Button>
      </Box>

      {booths.length === 0 ? (
        <Typography
          variant="body2"
          css={css`
            text-align: center;
            margin-top: ${spacing(4)};
            color: ${palette.text.secondary};
          `}
        >
          등록된 부스가 없습니다.
        </Typography>
      ) : (
        <Box css={BoothListStyle} sx={{ gap: spacing(2) }}>
          {booths.map((booth) => (
            <BoothBox
              key={booth.id}
              date={booth.date}
              place={booth.place}
              companyName={booth.companyName}
              companyType={booth.companyType}
              chartData={booth.chartData}
              onDelete={() => handleDeleteSession(booth.id)}
              onEdit={() => handleEditBooth(booth)}
            />
          ))}
        </Box>
      )}

      <AddBooth
        open={isAddBoothOpen}
        onClose={handleCloseAddBooth}
        mode={editMode}
        initialData={editData}
      />
    </Box>
  );
};

export default DashboardBoothDetail;
