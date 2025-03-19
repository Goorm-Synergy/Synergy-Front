import { useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import { css, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ConferenceForm from './Popup/ConferenceForm';

const ConferenceRegistration = () => {
  const { palette, typography, radius } = useTheme();
  const [isConferenceRegistered, setIsConferenceRegistered] = useState(false);
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<'add' | 'edit'>('add');
  const [conferenceData, setConferenceData] = useState<any>(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleRegister = () => {
    setMode('add');
    setConferenceData(null);
    handleOpen();
  };

  const handleModify = () => {
    if (isConferenceRegistered) {
      // 임시 데이터로 초기값 세팅 (실제 데이터는 API에서 가져오거나 state로 관리)
      const dummyData = {
        name: '샘플 컨퍼런스',
        host: '주최자',
        startDate: '2025.04.01',
        startTime: '10:00',
        endDate: '2025.04.01',
        endTime: '17:00',
        location: '그랜드볼룸',
        placeType: 'on-site',
        conferenceType: 'IT',
        description: '컨퍼런스 설명입니다.',
        imageFile: null,
      };

      setMode('edit');
      setConferenceData(dummyData);
      handleOpen();
    }
  };

  const handleModalSubmit = (data: any) => {
    console.log('등록 또는 수정 완료:', data);
    setIsConferenceRegistered(true);
    handleClose();
  };

  const buttonStyle = css`
    color: ${palette.text.primary};
    border: 1px solid ${palette.border.primary};
    border-radius: ${radius.md}px;
    padding: 12px 14px;
    font-family: ${typography.fontFamily};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    flex: 1 0 0;
    background-color: ${palette.background.primary};
  `;

  return (
    <Box
      display="flex"
      justifyContent="center"
      gap="16px"
      paddingTop="24px"
    >
      <Button
        variant="outlined"
        css={buttonStyle}
        onClick={handleRegister}
      >
        <AddIcon 
          css={css`
            font-size: 20px;
          `}
        />
        <Typography
          variant="body2"
          css={css`
            font-family: ${typography.fontFamily};
            font-weight: 500;
          `}
        >
          컨퍼런스 등록
        </Typography>
      </Button>
      <Button
        variant="outlined"
        css={css`
          ${buttonStyle}
          opacity: ${isConferenceRegistered ? 1 : 0.5};
          cursor: ${isConferenceRegistered ? 'pointer' : 'not-allowed'};
        `}
        onClick={handleModify}
      >
        <EditIcon 
          css={css`
            font-size: 20px;
          `}
        />
        <Typography
          variant="body2"
          css={css`
            font-family: ${typography.fontFamily};
            font-weight: 500;
          `}
        >
          컨퍼런스 수정
        </Typography>
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableEnforceFocus
      >
        <ConferenceForm
          mode={mode}
          open={open}
          onClose={handleClose}
          onSubmit={handleModalSubmit}
          initialData={conferenceData}
        />
      </Modal>
    </Box>
  );
};

export default ConferenceRegistration;
