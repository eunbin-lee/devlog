import { AppProps } from 'next/app';
import { ThemeProvider } from '../styles/theme-components';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../modules/index';
import Thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(Thunk));

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Head>
          <title>Devlog 데브로그</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="devlog에 오신 것을 환영합니다." />
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
