import { font } from '@fumy/ui/constants/fonts';
import type { Metadata, Viewport } from 'next';

import { basePath } from '@/routes';

import './globals.css';
import Providers from './providers';

import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: 'Ventures',
  description: 'Ventures application',
  icons: {
    icon: `${basePath}/favicon.ico`
  }
};

export const viewport: Viewport = {
  maximumScale: 1,
  initialScale: 1,
  width: 'device-width',
  userScalable: false
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${font.className} min-h-[100svh] scroll-mt-[64px] overflow-auto bg-white antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
