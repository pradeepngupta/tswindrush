import { render, screen } from '@testing-library/react';
import { act } from 'react';
import React from 'react';
import { ThemeSwitcher } from '@/app/components/theme-switcher';
import { ThemeProvider, useTheme } from '@/app/components/theme-provider';

// Mock window.matchMedia
beforeAll(() => {
	Object.defineProperty(window, 'matchMedia', {
		writable: true,
		value: jest.fn().mockImplementation((query) => ({
			matches: false,
			media: query,
			onchange: null,
			addListener: jest.fn(), // Deprecated
			removeListener: jest.fn(), // Deprecated
			addEventListener: jest.fn(),
			removeEventListener: jest.fn(),
			dispatchEvent: jest.fn(),
		})),
	});
});

// Test component to consume the theme
const TestComponent = () => {
	const { theme } = useTheme();
	return <p data-testid="current-theme">{theme}</p>;
};

describe('ThemeSwitcher', () => {
	it('renders the theme switcher buttons', () => {
		render(
			<ThemeProvider>
				<ThemeSwitcher />
			</ThemeProvider>,
		);

		const lightButton = screen.getByRole('button', { name: /^Light theme/i });
		const darkButton = screen.getByRole('button', { name: /^Dark theme/i });
		const systemButton = screen.getByRole('button', { name: /^System theme/i });

		expect(lightButton).toBeInTheDocument();
		expect(darkButton).toBeInTheDocument();
		expect(systemButton).toBeInTheDocument();
	});

	it('switches to the light theme when the light button is clicked', () => {
		render(
			<ThemeProvider>
				<ThemeSwitcher />
				<TestComponent />
			</ThemeProvider>,
		);

		const lightButton = screen.getByRole('button', { name: /^Light theme/i });

		act(() => {
			lightButton.click();
		});

		const currentTheme = screen.getByTestId('current-theme');
		expect(currentTheme).toHaveTextContent('light');
	});

	it('switches to the dark theme when the dark button is clicked', () => {
		render(
			<ThemeProvider>
				<ThemeSwitcher />
				<TestComponent />
			</ThemeProvider>,
		);

		const darkButton = screen.getByRole('button', { name: /^Dark theme/i });

		act(() => {
			darkButton.click();
		});

		const currentTheme = screen.getByTestId('current-theme');
		expect(currentTheme).toHaveTextContent('dark');
	});

	it('switches to the system theme when the system button is clicked', () => {
		render(
			<ThemeProvider>
				<ThemeSwitcher />
				<TestComponent />
			</ThemeProvider>,
		);

		const systemButton = screen.getByRole('button', { name: /^System theme/i });

		act(() => {
			systemButton.click();
		});

		const currentTheme = screen.getByTestId('current-theme');
		expect(currentTheme).toHaveTextContent('system');
	});
});
