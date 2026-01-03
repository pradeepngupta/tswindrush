// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import nextPlugin from '@next/eslint-plugin-next';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
	// Global ignores - must be first and separate
	{
		ignores: [
			'**/node_modules/**',
			'**/.next/**',
			'**/dist/**',
			'**/build/**',
			'**/coverage/**',
			'**/.turbo/**',
			'**/out/**',
		],
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		plugins: {
			'@next/next': nextPlugin,
			prettier: prettierPlugin,
		},
		rules: {
			...nextPlugin.configs.recommended.rules,
			...nextPlugin.configs['core-web-vitals'].rules,
			...prettierConfig.rules,
			...prettierPlugin.configs.recommended.rules,
			semi: 'error',
			'prefer-const': 'error',
			'@typescript-eslint/no-explicit-any': 'error',
		},
		languageOptions: {
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
	},
	// Node.js config files
	{
		files: ['**/*.config.{js,mjs,cjs}', '.lintstagedrc.js'],
		languageOptions: {
			globals: {
				process: 'readonly',
				module: 'readonly',
				require: 'readonly',
				__dirname: 'readonly',
				__filename: 'readonly',
			},
		},
	},
];
