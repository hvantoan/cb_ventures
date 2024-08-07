import HeaderTop from "@/components/Header";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { LandingFooter } from "./_components";
import Providers from "../providers";
import { ThemeProvider } from "styled-components";
import config from "@/libs/config/config";


const { theme } = config
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body suppressHydrationWarning={true}>
        <Providers>
          {/* <ThemeProvider theme={theme}> */}
          <HeaderTop />
          {children}
          <LandingFooter />
          {/* </ThemeProvider> */}
        </Providers>
      </body>
    </html >
  );
}
