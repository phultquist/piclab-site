import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Script src="https://kit.fontawesome.com/117bcfe378.js" crossOrigin="anonymous" async />
    <Component {...pageProps} />
  </>
}

export default MyApp
