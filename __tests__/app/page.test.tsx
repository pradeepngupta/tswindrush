import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import { useTheme } from '@/app/components/theme-provider';

// Mock the `useTheme` hook
jest.mock('@/app/components/theme-provider', () => ({
	useTheme: jest.fn(),
}));

describe('Home Page', () => {
	beforeEach(() => {
		// Mock the theme to return a default value
		(useTheme as jest.Mock).mockReturnValue({ theme: 'light' });
	});

	// it('renders the TSWindRushLogoSVGComponent with the correct theme', () => {
	//   render(<Home />);
	//   const svgElement = screen.getByRole('iTSWindRushLogoSVGComponentmg');
	//   expect(svgElement).toBeInTheDocument();
	// });

	it('renders the main heading text', () => {
		render(<Home />);
		const headingText = screen.getByText(
			/Create your awesome landing page with TS-Wind-Rush/i,
		);
		expect(headingText).toBeInTheDocument();
	});

	it('renders the "Get started" instructions', () => {
		render(<Home />);
		const instructionText = screen.getByText(/Get started by editing/i);
		expect(instructionText).toBeInTheDocument();
	});

	it('renders the "Deploy now" button with correct link', () => {
		render(<Home />);
		const deployButton = screen.getByRole('link', { name: /Deploy now/i });
		expect(deployButton).toHaveAttribute(
			'href',
			'https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app',
		);
	});

	it('renders the "Read our docs" button with correct link', () => {
		render(<Home />);
		const docsButton = screen.getByRole('link', { name: /Read our docs/i });
		expect(docsButton).toHaveAttribute(
			'href',
			'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app',
		);
	});

	it('renders the footer links', () => {
		render(<Home />);
		const githubLink = screen.getByRole('link', {
			name: /tswindrush Github Repository/i,
		});
		const learnLink = screen.getByRole('link', { name: /Learn/i });
		const examplesLink = screen.getByRole('link', { name: /Examples/i });
		const nextjsLink = screen.getByRole('link', { name: /Go to nextjs.org/i });

		expect(githubLink).toHaveAttribute(
			'href',
			'https://github.com/pradeepngupta/tswindrush',
		);
		expect(learnLink).toHaveAttribute(
			'href',
			'https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app',
		);
		expect(examplesLink).toHaveAttribute(
			'href',
			'https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app',
		);
		expect(nextjsLink).toHaveAttribute(
			'href',
			'https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app',
		);
	});
});
