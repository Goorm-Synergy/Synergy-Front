import { useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { css, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddSession from './Popup/AddSession';
import { useConferenceStore } from '@stores/client/useConferenceStore';
import { useSessionStore } from '@stores/client/useSessionStore'; 
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';

const SessionParticipation = () => {
    const { palette, typography, radius } = useTheme();
    const isConferenceRegistered = useConferenceStore((state) => state.isConferenceRegistered);
    const { isSessionRegistered, hasAggregationData } = useSessionStore(); 
    const [showAddSession, setShowAddSession] = useState(false);
    const navigate = useNavigate();

    const handleAddIconClick = () => {
        if (isConferenceRegistered) {
            setShowAddSession(true);
        } else {
            alert('컨퍼런스를 등록해주세요');
        }
    };

    const handleChevronClick = () => {
        if (isConferenceRegistered) {
            navigate('/admin/session');
        } else {
            alert('컨퍼런스를 등록해주세요');
        }
    };

    return (
        <Box position="relative">
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <Typography 
                    variant="subtitle1" 
                    fontWeight="bold"
                    css={css`
                        color: ${palette.text.primary};
                        font-family: ${typography.fontFamily};
                    `}
                >
                    세션 참여 현황
                </Typography>
                <ChevronRightIcon 
                    css={css`
                        color: ${palette.icon.primary};
                        cursor: pointer;
                    `}
                    onClick={handleChevronClick}
                />
            </Box>

            {!isConferenceRegistered ? (
                <Paper
                    css={css`
                        text-align: center;
                        color: ${palette.text.secondary};
                        border-radius: ${radius.sm}px;
                        background-color: ${palette.background.secondary};
                        padding: 50px;
                        border: ${palette.divider_custom.primary};
                        cursor: pointer;
                    `}
                    onClick={handleAddIconClick}
                >
                    <AddIcon 
                        css={css`
                            font-size: 40px;
                            color: ${palette.text.secondary};
                            margin-bottom: 16px;
                        `}
                    />
                    <Typography variant="body2">등록된 세션이 없습니다.</Typography>
                    <Typography variant="body2">컨퍼런스 등록 후 확인 가능합니다.</Typography>
                </Paper>
            ) : !isSessionRegistered ? (
                <Paper
                    css={css`
                        text-align: center;
                        color: ${palette.text.secondary};
                        border-radius: ${radius.sm}px;
                        background-color: ${palette.background.secondary};
                        padding: 50px;
                        border: ${palette.divider_custom.primary};
                        cursor: pointer;
                    `}
                    onClick={handleAddIconClick}
                >
                    <AddIcon 
                        css={css`
                            font-size: 40px;
                            color: ${palette.text.secondary};
                            margin-bottom: 16px;
                        `}
                    />
                    <Typography variant="body2">등록된 세션이 없습니다.</Typography>
                    <Typography variant="body2">세션 등록 후 확인 가능합니다.</Typography>
                </Paper>
            ) : !hasAggregationData ? (
                <Paper
                    css={css`
                        text-align: center;
                        color: ${palette.text.secondary};
                        border-radius: ${radius.sm}px;
                        background-color: ${palette.background.secondary};
                        padding: 50px;
                        border: ${palette.divider_custom.primary};
                    `}
                >
                    <Typography variant="body2" mb={1}>
                        집계된 정보가 없습니다.
                    </Typography>
                </Paper>
            ) : (
                <Typography>집계된 세션 정보 표시</Typography>
            )}

            {showAddSession && (
                <AddSession 
                    open={showAddSession}
                    onClose={() => setShowAddSession(false)}
                />
            )}
        </Box>
    );
};

export default SessionParticipation;
