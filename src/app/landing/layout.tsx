import HeaderTop from "@/components/Header";
import { LandingFooter } from "./_components";
import Providers from "@/app/providers";


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Providers>
        <HeaderTop />
        {children}
        <LandingFooter />
      </Providers>
    </div>
  );
}
