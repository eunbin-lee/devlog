import { AppProps } from 'next/app';
import { ThemeProvider } from '../styles/theme-components';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
