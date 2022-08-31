import "../styles/globals.css";
import type { AppProps } from "next/app";
import useTheme from "../components/useTheme";

function MyApp({ Component, pageProps }: AppProps) {
  useTheme();
  return <Component {...pageProps} />;
}

export default MyApp;
