import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getAcronymFromString } from '../stringUtils.ts';

describe('stringUtils', () => {
	describe('getAcronymFromString', () => {
		it('should return the correct acronym', () => {
			const str = 'Hello World';
			const expected = 'HW';

			assert.strictEqual(getAcronymFromString(str), expected);
		});

		it('should return the correct acronym when the string is empty', () => {
			const str = '';
			const expected = 'NA';

			assert.strictEqual(getAcronymFromString(str), expected);
		});

		it('should handle non-alphanumeric characters', () => {
			const str = 'Hello, World!';
			const expected = 'HW';

			assert.strictEqual(getAcronymFromString(str), expected);
		});
	});
});
