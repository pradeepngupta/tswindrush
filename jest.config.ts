import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
	dir: './',
});

const config: Config = {
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	moduleDirectories: ['node_modules'],
	transform: {
		'^.+\\.(t|j)sx?$': [
			'@swc/jest',
			{
				jsc: {
					transform: {
						react: {
							runtime: 'automatic',
						},
					},
				},
			},
		],
	},
	collectCoverage: true,
	collectCoverageFrom: ['<rootDir>/src/app/**'],
	coveragePathIgnorePatterns: [
		'<rootDir>/src/app/layout.tsx',
		'<rootDir>/src/node_modules/',
	],
	coverageThreshold: {
		global: {
			branches: 0,
			functions: 14,
			lines: 7,
			statements: 6,
		},
	},
	testMatch: ['**/__tests__/**/*.ts?(x)'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
};

export default createJestConfig(config);
