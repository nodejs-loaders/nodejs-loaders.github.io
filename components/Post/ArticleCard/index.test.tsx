import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { render } from '@testing-library/react';
import type { ComponentProps } from 'react';
import { ArticleCard } from './index.tsx';

const mockPost = {
	authors: 'Author1, Author2',
	date: '2025-07-01',
	description: 'Test Description',
	slug: 'test-title',
	title: 'Test Title',
} as ComponentProps<typeof ArticleCard>;

describe('ArticleCard', () => {
	it('should render as a div by default', (t) => {
		const { container, unmount } = render(<ArticleCard {...mockPost} />);
		const element = container.querySelector('div');

		assert(element !== null, 'ArticleCard should render as a div by default');
		t.assert.snapshot(container.innerHTML);

		unmount();
	});

	it('should render as a li when specified', (t) => {
		const { container, unmount } = render(
			<ArticleCard {...mockPost} as="li" />,
		);
		const element = container.querySelector('li');

		assert(
			element !== null,
			'ArticleCard should render as a li when specified',
		);
		t.assert.snapshot(container.innerHTML);

		unmount();
	});
});
