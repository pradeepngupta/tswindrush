import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import './globals.css'
import type React from 'react' // Added import for React

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'TSWinDRush - Modern Web Development Stack',
	description:
		'Kickstart your modern web development journey effortlessly with TypeScript, Tailwind CSS, and Next.js',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
