import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { Viewport, type Metadata } from "next";
import ThemeRegistry from "@/app/theme/ThemeRegistry";

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
    <html lang="vi" className={`${GeistSans.variable}`}>
      <body suppressHydrationWarning={true}>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
