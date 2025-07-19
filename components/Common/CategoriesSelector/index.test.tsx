import { describe, it } from 'node:test';
import { render } from '@testing-library/react';
import { CategoriesSelector } from './index.tsx';

const mockCategories = [
	{
		category: 'category1',
		slug: 'slug1',
	},
	{
		category: 'category2',
		slug: 'slug2',
	},
];

const mockCurrentCategories = ['slug1'];

describe('CategoriesSelector', () => {
	it('should render with an active category', (t) => {
		const { container, unmount } = render(
			<CategoriesSelector
				categories={mockCategories}
				currentCategories={mockCurrentCategories}
			/>,
		);

		t.assert.snapshot(container.innerHTML);

		unmount();
	});

	it('should render with no active category', (t) => {
		const { container, unmount } = render(
			<CategoriesSelector categories={mockCategories} currentCategories={[]} />,
		);

		t.assert.snapshot(container.innerHTML);

		unmount();
	});
});
