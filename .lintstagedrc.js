import { relative } from 'path';

const buildEslintCommand = (filenames) =>
	`next lint --fix --file ${filenames
		.map((f) => relative(process.cwd(), f))
		.join(' --file ')}`;

// .lintstagedrc.js
const config = {
	'*.{js,jsx,ts,tsx}': [buildEslintCommand],
	// '*.{ts,tsx}': 'npx tsc --noEmit',
	'*': 'npm run format:fix',
};

export default config;
