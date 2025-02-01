import type React from 'react'
import { SiteHeader } from '@/app/components/header'
import { SiteFooter } from '@/app/components/footer'

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-screen flex-col">
			<SiteHeader />
			<main className="flex-1 container mx-auto px-4 py-8">
				<div className="prose dark:prose-invert prose-headings:scroll-mt-8 max-w-none">
					{children}
				</div>
			</main>
			<SiteFooter />
		</div>
	)
}
