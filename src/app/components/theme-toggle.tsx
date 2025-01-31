'use client'

import { useTheme } from 'next-themes'
import { Button } from '@/app/components/ui/button'

export function ThemeToggle() {
	const { setTheme, theme } = useTheme()

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
			className="relative w-10 h-10"
		>
			<span className="sr-only">Toggle theme</span>
			<span className="icon-sun" aria-hidden="true"></span>
			<span className="icon-moon" aria-hidden="true"></span>
		</Button>
	)
}
