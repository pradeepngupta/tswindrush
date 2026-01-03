import { defineConfig, globalIgnores } from 'eslint/config';
// import nextTypescript from "eslint-config-next/typescript.js";
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default defineConfig([
	globalIgnores(['**/node_modules/']),
	{
		extends: [
			...compat.extends('eslint:recommended'),
			...compat.extends('next/core-web-vitals'),
			...compat.extends('next/typescript'),
			...compat.extends('plugin:@typescript-eslint/recommended'),
			...compat.extends('plugin:prettier/recommended'),
		],

		languageOptions: {
			parser: tsParser,
		},

		rules: {
			'@typescript-eslint/no-explicit-any': 'error',
		},
		ignores: ['**/dist/**', '**/.next/**', '/node_modules/**'],
	},
]);
