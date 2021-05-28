import baseStyled, {
  css,
  CSSProp,
  ThemedStyledInterface,
} from 'styled-components';

const sizes: { [key: string]: number } = {
  mobile: 320,
  tablet: 768,
  lowDesktop: 1024,
  highDesktop: 1240,
};

type BackQuoteArgs = string[];

interface Media {
  mobile: (...args: BackQuoteArgs) => CSSProp | undefined;
  tablet: (...args: BackQuoteArgs) => CSSProp | undefined;
  lowDesktop: (...args: BackQuoteArgs) => CSSProp | undefined;
  highDesktop: (...args: BackQuoteArgs) => CSSProp | undefined;
}

const media: Media = {
  mobile: (...args: BackQuoteArgs) => undefined,
  tablet: (...args: BackQuoteArgs) => undefined,
  lowDesktop: (...args: BackQuoteArgs) => undefined,
  highDesktop: (...args: BackQuoteArgs) => undefined,
};

Object.keys(sizes).reduce((acc: Media, label: string) => {
  switch (label) {
    case 'mobile':
      acc.mobile = (...args: BackQuoteArgs) =>
        css`
          @media only screen and (min-width: ${sizes.mobile}) {
            ${args}
          }
        `;
      break;
    case 'tablet':
      acc.tablet = (...args: BackQuoteArgs) =>
        css`
          @media only screen and (min-width: ${sizes.tablet}) {
            ${args}
          }
        `;
      break;
    case 'lowDesktop':
      acc.lowDesktop = (...args: BackQuoteArgs) =>
        css`
          @media only screen and (min-width: ${sizes.lowDesktop}) {
            ${args}
          }
        `;
      break;
    case 'highDesktop':
      acc.highDesktop = (...args: BackQuoteArgs) =>
        css`
          @media only screen and (min-width: ${sizes.highDesktop}) {
            ${args}
          }
        `;
      break;
    default:
      break;
  }
  return acc;
}, media);

const palette = {
  white: '#ffffff',
  black: '#212529',
  blue: '#4263eb',
  red: '#f03e3e',
  /* teal */
  teal0: '#20c997',
  teal1: '#12b886',
  teal2: '#0ca678',
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
  xsmall: '0.8rem',
  small: '0.85rem',
  medium: '1rem',
  large: '1.15rem',
  xlarge: '1.25rem',
};

const buttonColors = {
  teal: {
    background: palette.teal1,
    color: palette.white,
    hoverBackground: palette.teal0,
  },
  lightGray: {
    background: palette.gray2,
    color: palette.gray7,
    hoverBackground: palette.gray1,
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
