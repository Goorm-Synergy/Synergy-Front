import { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { css, useTheme } from '@mui/material/styles';
import QrCodeIcon from '@mui/icons-material/QrCode';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmDeleteDialog from '../ConfirmDeleteDialog';
import QRPopup from './Popup/QRPopup';
import DetailChart from './DetailChart';
import { BoothData } from '@routes/pages/DashboardBoothDetail';

interface BoothBoxProps {
  onDelete: () => void;
  onEdit: () => void;
}

const BoothBox = ({
  progressDate,
  boothLocation,
  companyName,
  companyType,
  qrCode,
  dataset,
  onDelete,
  onEdit,
}: BoothBoxProps & BoothData) => {
  const theme = useTheme();
  const { palette, spacing, typo } = theme;
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [qrPopupOpen, setQrPopupOpen] = useState(false);

  const boxStyle = css`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: ${palette.background.quaternary};
    padding: 24px;
    border-radius: 18px;
    margin-bottom: ${spacing(2)}px;
    color: ${palette.text.primary};
    overflow-x: auto;
  `;

  const infoStyle = css`
    font-family: ${typo.fontFamily.Pretendard};
    color: ${palette.text.primary};
    margin-bottom: ${spacing(0.5)}px;
  `;

  const iconContainerStyle = css`
    color: ${palette.icon.primary};
    position: absolute;
    top: 24px;
    right: 24px;
    display: flex;
    gap: 2px;
  `;

  return (
    <Box css={boxStyle}>
      <ConfirmDeleteDialog
        open={deleteDialogOpen}
        title="부스를 삭제하시겠습니까?"
        description="부스 삭제 시 복구가 불가능합니다."
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={() => {
          onDelete();
          setDeleteDialogOpen(false);
        }}
      />
      <QRPopup
        open={qrPopupOpen}
        onClose={() => setQrPopupOpen(false)}
        qrCodeLabel={companyName}
        description={companyType}
        qrUrl={qrCode}
      />
      <Box css={iconContainerStyle}>
        <IconButton
          size="small"
          color="inherit"
          onClick={() => setQrPopupOpen(true)}
        >
          <QrCodeIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" color="inherit" onClick={onEdit}>
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          color="inherit"
          onClick={() => setDeleteDialogOpen(true)}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* 정보 영역 */}
      <Typography css={infoStyle}>
        {progressDate} {boothLocation}
      </Typography>
      <Typography css={infoStyle}>
        <strong css={{ ...typo.sub.s }}>{companyName}</strong> {companyType}
      </Typography>

      <DetailChart dataset={dataset} />
    </Box>
  );
};

export default BoothBox;
