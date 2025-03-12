import React from 'react';
import { Box, TextField, Select, MenuItem, Button, Typography } from '@mui/material';
import { css, useTheme } from '@mui/material';

interface ConferenceModalProps {
    onClose: () => void;
    onRegister: () => void;
}

const ConferenceModal: React.FC<ConferenceModalProps> = ({ onClose, onRegister }) => {
    const { palette, typography, radius } = useTheme();

    const modalStyle = css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 400px;
        max-height: 70vh;
        height: auto;
        background-color: ${palette.background.secondary};
        border-radius: ${radius.sm}px;
        box-shadow: 24px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        overflow-y: auto;
    `;

    return (
        <Box css={modalStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2"
                css={css`
                    color: ${palette.text.primary};
                    font-family: ${typography.fontFamily};
                    font-weight: bold;
                    text-align: center;
                    margin-bottom: 20px;
                `}
            >
                컨퍼런스 등록
            </Typography>
            <TextField label="컨퍼런스 명" variant="outlined" fullWidth margin="normal"
                InputProps={{
                    style: {
                        color: palette.text.primary,
                        fontFamily: typography.fontFamily,
                    },
                }}
            />
            <TextField label="컨퍼런스 주최자" variant="outlined" fullWidth margin="normal"
                InputProps={{
                    style: {
                        color: palette.text.primary,
                        fontFamily: typography.fontFamily,
                    },
                }}
            />
            <TextField label="시작일" variant="outlined" fullWidth margin="normal"
                InputProps={{
                    style: {
                        color: palette.text.primary,
                        fontFamily: typography.fontFamily,
                    },
                }}
            />
            <TextField label="시작 시간" variant="outlined" fullWidth margin="normal"
                InputProps={{
                    style: {
                        color: palette.text.primary,
                        fontFamily: typography.fontFamily,
                    },
                }}
            />
            <TextField label="종료일" variant="outlined" fullWidth margin="normal"
                InputProps={{
                    style: {
                        color: palette.text.primary,
                        fontFamily: typography.fontFamily,
                    },
                }}
            />
            <TextField label="종료 시간" variant="outlined" fullWidth margin="normal"
                InputProps={{
                    style: {
                        color: palette.text.primary,
                        fontFamily: typography.fontFamily,
                    },
                }}
            />
            <TextField label="컨퍼런스 장소" variant="outlined" fullWidth margin="normal"
                InputProps={{
                    style: {
                        color: palette.text.primary,
                        fontFamily: typography.fontFamily,
                    },
                }}
            />
            <Select
                fullWidth
                margin="dense"
                defaultValue=""
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                css={css`
                    color: ${palette.text.primary};
                    font-family: ${typography.fontFamily};
                `}
            >
                <MenuItem value="" disabled>
                    컨퍼런스 위치 선택
                </MenuItem>
            </Select>
            <Select
                fullWidth
                margin="dense"
                defaultValue=""
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                css={css`
                    color: ${palette.text.primary};
                    font-family: ${typography.fontFamily};
                `}
            >
                <MenuItem value="" disabled>
                    컨퍼런스 유형 선택
                </MenuItem>
            </Select>
            <Button variant="contained" fullWidth
                css={css`
                    background-color: ${palette.background.primary};
                    color: ${palette.text.primary};
                    font-family: ${typography.fontFamily};
                    font-weight: bold;
                    padding: 12px;
                    &:hover {
                        background-color: ${palette.background.tertiary};
                    }
                `}
                onClick={() => {
                    onRegister();
                    onClose();
                }}
            >
                등록하기
            </Button>
        </Box>
    );
};

export default ConferenceModal;
