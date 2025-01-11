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
	collectCoverageFrom: ['./pages/**'],
	coverageThreshold: {
		global: {
			branches: 30,
			functions: 30,
			lines: 30,
			statements: 30,
		},
	},
	testMatch: ['**/__tests__/**/*.ts?(x)'],
};

export default createJestConfig(config);
