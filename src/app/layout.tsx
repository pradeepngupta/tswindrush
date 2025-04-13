import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/app/globals.css';
import { ThemeProvider } from '@/app/components/theme-provider';
import { ThemeSwitcher } from '@/app/components/theme-switcher';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'TSWindRush',
	description: 'TSWindRush - A Starter Template with NextJs, Typescript & TailwindCSS',
	manifest: './manifest.json',
	keywords: 'TSWindRush, Next.js, TailwindCSS, Typscript, Starter Template',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider>
					{children}
					<ThemeSwitcher />
				</ThemeProvider>
			</body>
		</html>
	);
}
