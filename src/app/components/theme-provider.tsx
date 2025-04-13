'use client';

import type React from 'react';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'monochrome-light' | 'monochrome-dark' | 'system';

type ThemeProviderProps = {
	children: React.ReactNode;
};

type ThemeProviderState = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
	theme: 'system',
	setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({ children }: ThemeProviderProps) {
	const [theme, setTheme] = useState<Theme>('system');

	useEffect(() => {
		const storedTheme = localStorage.getItem('theme') as Theme | null;
		if (storedTheme) {
			setTheme(storedTheme);
		}
	}, []);

	useEffect(() => {
		const root = window.document.documentElement;

		// Remove all theme classes
		root.classList.remove('light', 'dark', 'monochrome-light', 'monochrome-dark');

		// Apply the appropriate theme
		if (theme === 'system') {
			const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light';
			root.classList.add(systemTheme);
		} else {
			root.classList.add(theme);
		}

		// Store the theme preference
		localStorage.setItem('theme', theme);
	}, [theme]);

	const value = {
		theme,
		setTheme,
	};

	return (
		<ThemeProviderContext.Provider value={value}>
			{children}
		</ThemeProviderContext.Provider>
	);
}

export const useTheme = () => {
	const context = useContext(ThemeProviderContext);

	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}

	return context;
};
