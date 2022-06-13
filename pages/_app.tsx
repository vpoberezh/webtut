import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CoinIconProvider } from 'coin-icon';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CoinIconProvider folderPath="/coin">
      <Component {...pageProps} />
    </CoinIconProvider>
  );
}

export default MyApp;
