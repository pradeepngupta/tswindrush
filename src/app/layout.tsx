'use client'

import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import './globals.css'
import type React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${inter.className} flex justify-center min-h-screen bg-background`}
			>
				<div className="w-full max-w-7xl">
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
						{children}
					</ThemeProvider>
				</div>
			</body>
		</html>
	)
}
