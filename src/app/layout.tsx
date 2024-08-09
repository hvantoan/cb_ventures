import "@/styles/globals.css";
import { Viewport, type Metadata } from "next";
import ThemeRegistry from "@/theme/ThemeRegistry";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "CB Ventures",
  description: "CB Ventures",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export const viewport: Viewport = {
  maximumScale: 1,
  initialScale: 1,
  width: 'device-width',
  userScalable: false
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body suppressHydrationWarning={true}>
        <Providers>
          <ThemeRegistry>
            {children}
          </ThemeRegistry>
        </Providers>
      </body>
    </html>
  );
}
