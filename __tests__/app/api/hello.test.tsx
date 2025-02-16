/**
 * @jest-environment node
 */

import { GET } from '@/app/api/hello/route';
import { NextResponse } from 'next/server';

describe('Hello API Route', () => {
	it('should return the correct JSON response', async () => {
		const response = await GET();
		expect(response).toBeInstanceOf(NextResponse);
		const json = await response.json();

		expect(response.status).toBe(200);
		expect(json).toEqual({ name: 'TSWindRush' });
	});
});
