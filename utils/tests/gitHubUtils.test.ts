import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getGitHubAvatarUrl, getGithubProfileUrl } from '../gitHubUtils.ts';

describe('gitHubUtils', () => {
	describe('getGitHubAvatarUrl', () => {
		it('should return the correct URL', () => {
			const username = 'octocat';
			const expected = 'https://avatars.githubusercontent.com/octocat';

			assert.strictEqual(getGitHubAvatarUrl(username), expected);
		});

		it('shoud return 200 http status code', async () => {
			const username = 'AugustinMauroy';

			const response = await fetch(getGitHubAvatarUrl(username));

			assert.strictEqual(response.status, 200);
		});
	});

	describe('getGithubProfileUrl', () => {
		it('should return the correct URL', () => {
			const username = 'octocat';
			const expected = 'https://github.com/octocat';

			assert.strictEqual(getGithubProfileUrl(username), expected);
		});
	});
});
