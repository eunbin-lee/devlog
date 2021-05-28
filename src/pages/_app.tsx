import { AppProps } from 'next/app';
import { ThemeProvider } from '../styles/theme-components';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
