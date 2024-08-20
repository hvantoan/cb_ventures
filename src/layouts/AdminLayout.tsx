'use client'
import { Layout } from "antd";
import HeaderTop from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import { useAppSelector } from "@/redux";

interface AdminLayoutProps {
	children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
	const { topMenu, collapsed, rtl, mainContent } = useAppSelector((state) => {
		return {
			topMenu: state.layout.topMenu,
			collapsed: state.layout.menuCollapse,
			rtl: state.layout.rtlData,
			mainContent: state.layout.mode,
		};
	});

	if (typeof document === "undefined") {
		return <div />;
	}

	if (mainContent === 'darkMode') {
		document.body.classList.add('dark');
	}

	if (rtl) {
		const htmlElement: HTMLElement | null = document.querySelector('html');
		if (htmlElement) {
			htmlElement.setAttribute('dir', 'rtl');
		}
	}

	return (
		<>
			<HeaderTop />
			<div className='flex flex-row gap-5 mt-[72px]'>
				<Sidebar />
				<Layout className={`max-w-full duration-[300ms] ${!topMenu ? `xl:ps-0 ease-[ease] ${collapsed ? 'ps-[80px]' : 'ps-[280px] delay-[150ms]'}` : ''}`}>
					<Layout.Content>
						{children}
						<Footer />
					</Layout.Content>
				</Layout>
			</div>
		</>
	);
}
