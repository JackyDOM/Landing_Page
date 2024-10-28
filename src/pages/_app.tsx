import "@/styles/globals.css";
import 'aos/dist/aos.css';
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/inter";
import "@fontsource-variable/noto-sans-khmer";
import { NextIntlClientProvider } from "next-intl";
import type { AppProps } from "next/app";
import getTheme from "../themes/theme";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  return (
    <NextIntlClientProvider 
      timeZone="Asia/Phnom_Penh" 
      locale={locale ?? "km"} 
      messages={pageProps.messages}
    >
      <ChakraProvider theme={getTheme(locale ?? "km")}>
        <Component {...pageProps} />
      </ChakraProvider>
    </NextIntlClientProvider>
  );
}
