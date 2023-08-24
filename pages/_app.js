import './globals.css'
import { Nunito } from "next/font/google";

const inter = Nunito({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}