import { createTheme } from '@mui/material/styles';
import { color, radius, typography } from './foundation';

export type RadiusType = typeof radius;
export type TypoType = typeof typography;

const theme = createTheme({
  palette: {
    name: { primary: color.red500 },
    text: {
      primary: color.gray900,
      secondary: color.gray800,
      tertiary: color.gray700,
      quaternary: color.gray600,
      inverse: color.gray0,
      warning: color.red500,
      interactive: color.blue500,
    },
    background: {
      primary: color.gray0,
      secondary: color.gray200,
      tertiary: color.gray300,
      quaternary: color.gray500,
      inverse: color.gray100,
      interactive: color.blue300,
    },
    border: {
      primary: color.gray500,
      secondary: color.gray600,
      tertiary: color.gray400,
      dark_warning: color.red100,
      interactive: '미정',
    },
    divider_custom: {
      primary: color.gray500,
      secondary: color.gray600,
      tertiary: color.gray400,
      dark_warning: color.red100,
      inverse: '미정',
      interactive: '미정',
    },
    opacity: {
      opa100: color.gray500a,
      opa200: color.gray700a,
    },
  },
  radius,
  typo: typography,
  typography: {
    fontFamily: typography.fontFamily.Pretendard,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily.Pretendard,
          borderRadius: '8px',
          border: '2px solid #ddd',
          backgroundColor: 'white',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily.Pretendard,
        },
      },
    },
  },
});

export default theme;
