import type { AppProps } from "next/app";
import GlobalStyles from "@/components/GlobalStyles";
import { fr } from "date-fns/locale";
import { setDefaultOptions } from "date-fns";

setDefaultOptions({ locale: fr });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
