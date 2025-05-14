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
	title: 'Oskar Wiktor – Frontend Developer',
	description: 'Portfolio i CV Oskara Wiktora – Frontend Developera',
	other: {
		'google-site-verification': 'google7c3f6ea470f6eb28',
	},
	creator: 'Oskar Wiktor',
	robots: 'index, follow',
	authors: [{ name: 'Oskar Wiktor' }],
	openGraph: {
		title: 'Oskar Wiktor – Frontend Developer',
		description: 'Portfolio i CV Oskara Wiktora – Frontend Developera',
		url: 'https://cv.oskarwiktor.dev',
		type: 'website',
		images: [
			{
				url: 'https://cv.oskarwiktor.dev/assets/profile.jpg',
				width: 1200,
				height: 630,
				alt: 'Oskar Wiktor CV',
			},
		],
	},
	keywords: ['Oskar Wiktor', 'Frontend Developer', 'Next.js', 'React', 'CV', 'Portfolio'],
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
							<main className='w-full md:w-[calc(100%-16rem)] md:ml-auto mt-6 mb-6 pl-4 pr-4 md:pl-8 md:pr-8 lg:pl-12 lg:pr-12 xl:pl-24 xl:pr-24'>
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
