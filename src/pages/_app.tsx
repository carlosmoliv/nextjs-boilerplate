import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

import { store, persistor } from 'src/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import 'tailwindcss/tailwind.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
          <GlobalStyle />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default MyApp;
