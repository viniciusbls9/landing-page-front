import type { AppProps } from 'next/app';
import theme from 'styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import { Menu } from 'components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
