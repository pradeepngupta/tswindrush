import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

describe('HomePage', () => {
	it('shows NextJs Logo', () => {
		render(<Home />);
		// render(<Home/>);
		const logo = screen.getByAltText('Next.js logo');
		expect(logo).toBeInTheDocument();
		expect(logo).toHaveAttribute('src', '/next.svg');
	});
});
