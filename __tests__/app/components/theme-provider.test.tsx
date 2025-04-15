import { render, screen } from '@testing-library/react';
import { act } from 'react';
import React from 'react';
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

// Mock component to test the `useTheme` hook
const TestComponent = () => {
	const { theme, setTheme } = useTheme();

	return (
		<div>
			<p data-testid="current-theme">Current Theme: {theme}</p>
			<button onClick={() => setTheme('light')} data-testid="light-button">
				Set Light Theme
			</button>
			<button onClick={() => setTheme('dark')} data-testid="dark-button">
				Set Dark Theme
			</button>
		</div>
	);
};

describe('ThemeSwitcher', () => {
	it('provides the default theme', () => {
		render(
			<ThemeProvider>
				<TestComponent />
			</ThemeProvider>,
		);

		const currentTheme = screen.getByTestId('current-theme');
		expect(currentTheme).toHaveTextContent('Current Theme: system'); // Assuming 'light' is the default theme
	});

	it('allows switching to the light theme', () => {
		render(
			<ThemeProvider>
				<TestComponent />
			</ThemeProvider>,
		);

		const lightButton = screen.getByTestId('light-button');
		act(() => {
			lightButton.click();
		});

		const currentTheme = screen.getByTestId('current-theme');
		expect(currentTheme).toHaveTextContent('Current Theme: light');
	});

	it('allows switching to the dark theme', () => {
		render(
			<ThemeProvider>
				<TestComponent />
			</ThemeProvider>,
		);

		const darkButton = screen.getByTestId('dark-button');
		act(() => {
			darkButton.click();
		});

		const currentTheme = screen.getByTestId('current-theme');
		expect(currentTheme).toHaveTextContent('Current Theme: dark');
	});
});
