import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { Nunito } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} className={`${poppins.variable} ${nunito.variable}`} />
    </>
  );
}
