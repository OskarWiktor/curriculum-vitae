import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import SideNav from './ui/sidenav';
import TopToolbar from './ui/toptoolbar';
import { LanguageProvider } from '@/hooks/useTranslation';
import { FontSizeProvider } from '@/hooks/useFontSize';
import { ThemeProvider } from '@/hooks/useTheme';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Oskar Wiktor',
	description: 'FrontEnd Developer Curriculum Vitae',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased flex-col md:flex-row flex`}>
				<ThemeProvider>
					<LanguageProvider>
						<FontSizeProvider>
							<SideNav />
							<main className='w-full md:w-[calc(100%-240px)] lg:w-[calc(100%-264px)] md:ml-auto mt-6 mb-6 pl-4 pr-4 md:pl-8 md:pr-8 lg:pl-12 lg:pr-12 xl:pl-24 xl:pr-24'>
								<TopToolbar />
								{children}
							</main>
						</FontSizeProvider>
					</LanguageProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
