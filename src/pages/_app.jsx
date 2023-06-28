import '@/styles/globals.css'
import { BagProvider } from '../providers/BagContext/Provider'

export default function App({ Component, pageProps }) {
  return (
    <BagProvider>
      <Component {...pageProps} />
    </BagProvider>
  ) 
}
