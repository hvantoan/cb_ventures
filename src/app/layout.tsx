import "@/styles/globals.css";
import { Viewport, type Metadata } from "next";
import ThemeRegistry from "@/theme/ThemeRegistry";
import Providers from "./providers";
import { AdminLayout } from "@/layouts/AdminLayout";

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
    <html lang="vi" dir="ltr">
      <body suppressHydrationWarning={true}>
        <Providers>
          <ThemeRegistry>
            <AdminLayout>
              {children}
            </AdminLayout>
          </ThemeRegistry>
        </Providers>
      </body>
    </html>
  );
}
