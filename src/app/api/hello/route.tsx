import { NextResponse } from 'next/server';

export async function GET() {
	return NextResponse.json({ name: 'Pradeep Gupta', profession: 'Software Developer' });
}
