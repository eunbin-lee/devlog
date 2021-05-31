import baseStyled, { ThemedStyledInterface } from 'styled-components';

const mediaQuery = (maxWidth: number) => `
  @media only screen and (max-width: ${maxWidth}rem)
`;

const media = {
  small: mediaQuery(19.938), // 319px
  medium: mediaQuery(47.938), // 767px
  large: mediaQuery(63.938), // 1023px
  xlarge: mediaQuery(77.438), // 1239px
};

const palette = {
  white: '#ffffff',
  black: '#212529',
  blue: '#4263eb',
  red: '#f03e3e',
  /* violet */
  violet0: '#6741d9',
  violet1: '#5f3dc4',
  /* gray */
  gray0: '#f8f9fa',
  gray1: '#f1f3f5',
  gray2: '#e9ecef',
  gray3: '#dee2e6',
  gray4: '#ced4da',
  gray5: '#adb5bd',
  gray6: '#868e96',
  gray7: '#495057',
  gray8: '#343a40',
};

const fontSizes = {
  xsmall: '0.725rem',
  small: '0.8rem',
  default: '0.95rem',
  large: '1.125rem',
  xlarge: '1.25rem',
};

const buttonColors: {
  [color: string]: {
    background: string;
    color: string;
    hoverBackground: string;
  };
} = {
  violet: {
    background: palette.violet1,
    color: palette.white,
    hoverBackground: palette.violet0,
  },
  lightGray: {
    background: palette.gray3,
    color: palette.gray7,
    hoverBackground: palette.gray2,
  },
  darkGray: {
    background: palette.gray7,
    color: palette.white,
    hoverBackground: palette.gray6,
  },
};

const theme = {
  palette,
  fontSizes,
  media,
  buttonColors,
};

export type Theme = typeof theme;
export const styled = baseStyled as unknown as ThemedStyledInterface<Theme>;
export default theme;
