import 'antd/dist/antd.css'

// import 'antd/lib/style'
// import 'antd/lib/button/style'
// import '../styles/ant-button.less'


import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
