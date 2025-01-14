import { NextResponse } from 'next/server';
import packageJson from '../../../../package.json';

export async function GET() {
	const typescriptVersion = packageJson.devDependencies.typescript || 'Not Installed';
	return NextResponse.json({ typescript: typescriptVersion.replace('^', '') });
}
