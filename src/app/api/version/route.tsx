import { NextResponse } from 'next/server';
import packageJson from '../../../../package.json';

export async function GET() {
	const typescriptVersion = packageJson.devDependencies.typescript || 'Not Installed';
	const nextjsVersion = packageJson.dependencies.next || 'Not Installed';
	const tailwindCSSVersion = packageJson.devDependencies.tailwindcss || 'Not Installed';
	const reactjsVersion = packageJson.dependencies.react || 'Not Installed';
	return NextResponse.json({
		typescript: typescriptVersion.replace('^', ''),
		nextjs: nextjsVersion.replace('^', ''),
		tailwindCSS: tailwindCSSVersion.replace('^', ''),
		reactjs: reactjsVersion.replace('^', ''),
	});
}
