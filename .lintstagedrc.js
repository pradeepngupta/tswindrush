import { relative } from 'path';

const buildEslintCommand = (filenames) =>
	`eslint --fix ${filenames.map((f) => relative(process.cwd(), f)).join(' ')}`;

// .lintstagedrc.js
const config = {
	'*.{js,jsx,ts,tsx}': [buildEslintCommand],
	// '*.{ts,tsx}': 'npx tsc --noEmit',
	'*': 'npm run format:fix',
};

export default config;
