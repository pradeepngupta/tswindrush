'use client';

import { useTheme } from '@/app/components/theme-provider';
import { useEffect, useState } from 'react';

export function ThemeSwitcher() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Avoid hydration mismatch by only rendering after mount
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<div className="fixed top-4 right-4 bg-background/80 backdrop-blur-sm border border-black/[.08] dark:border-white/[.145] rounded-full p-1 flex gap-1 z-50">
			<button
				onClick={() => setTheme('light')}
				className={`p-2 rounded-full tooltip ${theme === 'light' ? 'bg-foreground/10' : 'hover:bg-foreground/5'}`}
				aria-label="Light theme"
			>
				<div className="icon-sun" />
				<span className="tooltiptext">Light</span>
			</button>
			<button
				onClick={() => setTheme('dark')}
				className={`p-2 rounded-full tooltip ${theme === 'dark' ? 'bg-foreground/10' : 'hover:bg-foreground/5'}`}
				aria-label="Dark theme"
			>
				<div className="icon-moon" />
				<span className="tooltiptext">Dark</span>
			</button>
			<button
				onClick={() => setTheme('monochrome-light')}
				className={`p-2 rounded-full tooltip ${theme === 'monochrome-light' ? 'bg-foreground/10' : 'hover:bg-foreground/5'}`}
				aria-label="Monochrome light theme"
			>
				<div className="icon-contrast" />
				<span className="tooltiptext">Monochrome Light</span>
			</button>
			<button
				onClick={() => setTheme('monochrome-dark')}
				className={`p-2 rounded-full tooltip ${theme === 'monochrome-dark' ? 'bg-foreground/10' : 'hover:bg-foreground/5'}`}
				aria-label="Monochrome dark theme"
			>
				<div className="icon-contrast-dark" />
				<span className="tooltiptext">Monochrome Dark</span>
			</button>
			<button
				onClick={() => setTheme('system')}
				className={`p-2 rounded-full tooltip ${theme === 'system' ? 'bg-foreground/10' : 'hover:bg-foreground/5'}`}
				aria-label="System theme"
			>
				<div className="icon-system" />
				<span className="tooltiptext">System</span>
			</button>
		</div>
	);
}
