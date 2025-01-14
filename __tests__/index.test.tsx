import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

describe('Index', () => {
	it('renders a heading', () => {
		render(<Home />);
		// render(<Home/>);
		const heading = screen.getByRole('heading', { level: 1 });
		expect(heading).toBeInTheDocument();
	});
});
