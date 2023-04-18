import type { AppProps } from "next/app";
import GlobalStyles from "@/components/GlobalStyles";
import { fr } from "date-fns/locale";
import { setDefaultOptions } from "date-fns";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

setDefaultOptions({ locale: fr });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}
