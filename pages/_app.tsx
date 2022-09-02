import "../styles/globals.css";
import type { AppProps } from "next/app";
import useTheme from "../components/useTheme";
import toast, { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  useTheme();
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
