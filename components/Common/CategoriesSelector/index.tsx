import classNames from 'classnames';
import type { FC } from 'react';

type CategoriesSelectorProps = {
	currentCategories: Array<string>;
	categories: Array<{
		slug: string;
		category: string;
	}>;
};

export const CategoriesSelector: FC<CategoriesSelectorProps> = ({
	currentCategories,
	categories,
}) => (
	<ul className="mb-4 flex space-x-2 border-green-400 border-b-4 text-gray-800 dark:border-green-600 dark:text-gray-200">
		{categories.map((category, i) => (
			<li
				key={category.slug}
				className={classNames(
					'flex cursor-pointer items-center rounded-t-md px-2 py-1 transition duration-200 hover:bg-green-400 hover:text-white dark:hover:bg-green-600 dark:hover:text-white',
					{
						'bg-green-400 text-white :dark:bg-green-600':
							(currentCategories.length === 0 && i === 0) ||
							currentCategories.includes(category.slug),
					}
				)}
			>
				<a href={`/article/${category.slug}`.replace(/\/$/, '')}>
					{category.category}
				</a>
			</li>
		))}
	</ul>
);
