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

const colors = {
  white: '#ffffff',
  black: '#212529',
};

const fontSizes = {
  medium: { fontSize: '1rem' },
};

const theme = {
  colors,
  fontSizes,
  media,
};

export type Theme = typeof theme;
export const styled = baseStyled as unknown as ThemedStyledInterface<Theme>;
export default theme;
