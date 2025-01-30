import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { postSlug2Href } from '../PostUtils.ts';

describe('PostUtils', () => {
	describe('postSlug2Href', () => {
		it('should return the correct URL for a given slug', () => {
			const slug = 'example-slug';
			const expected = 'article/post/example-slug';

			assert.strictEqual(postSlug2Href(slug), expected);
		});

		it('should handle empty slug correctly', () => {
			const slug = '';
			const expected = 'article/post/';

			assert.strictEqual(postSlug2Href(slug), expected);
		});

		it('should handle slugs with special characters', () => {
			const slug = 'special-characters-!@#$%^&*()';
			const expected = 'article/post/special-characters-!@#$%^&*()';

			assert.strictEqual(postSlug2Href(slug), expected);
		});
	});
});
