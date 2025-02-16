/**
 * @jest-environment node
 */

import { GET } from '@/app/api/version/route';
import { NextResponse } from 'next/server';
import packageJson from '@/../package.json';

describe('Hello API Route', () => {
	it('should return the correct JSON response', async () => {
		const typescriptVersion = packageJson.devDependencies.typescript || 'Not Installed';
		const nextjsVersion = packageJson.dependencies.next || 'Not Installed';
		const tailwindCSSVersion = packageJson.devDependencies.tailwindcss || 'Not Installed';
		const reactjsVersion = packageJson.dependencies.react || 'Not Installed';

		const response = await GET();
		expect(response).toBeInstanceOf(NextResponse);
		const json = await response.json();

		expect(response.status).toBe(200);
		expect(json).toEqual({
			typescript: typescriptVersion.replace('^', ''),
			nextjs: nextjsVersion.replace('^', ''),
			tailwindCSS: tailwindCSSVersion.replace('^', ''),
			reactjs: reactjsVersion.replace('^', ''),
		});
	});
});
