import '../styles/reset.css'
import '../styles/global.scss'
import '../styles/breakpoints.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
