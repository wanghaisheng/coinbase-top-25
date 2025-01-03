import type { AppProps } from 'next/app';
import { ThemeContextProvider } from '@/context/ThemeProvider';
import Head from 'next/head';
import { Box, Flex } from '@chakra-ui/react';
import WalletConnectionProvider from '@/context/WalletConnectionProvider';
import { ReactQueryProvider } from '@/context/ReactQueryProvider';
import { useState } from 'react';
import '@/styles/fonts.css';
import '../styles/globals.css';
import Header from '@/components/Navigation/Header';

export default function App({ Component, pageProps }: AppProps) {
  const [favicon, setFavicon] = useState('/favicon.ico');

  return (
    <ThemeContextProvider>
      <Head>
        <link rel='icon' href={favicon} />
        <title>Bright Sight</title>
      </Head>
      <WalletConnectionProvider>
        <ReactQueryProvider>
          <Box h='100vh'>
            <Flex
              minH='calc(100vh - 66px)' // Footer h 473; Header h 66
              justifyContent='center'
              flexDir='column'
            >
              <Header />
              <Component {...pageProps} />
            </Flex>
          </Box>
        </ReactQueryProvider>
      </WalletConnectionProvider>
    </ThemeContextProvider>
  );
}
