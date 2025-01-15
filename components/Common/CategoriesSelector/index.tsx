import classNames from 'classnames';
import styles from './index.module.css';
import type { FC } from 'react';

type CategoriesSelectorProps = {
	currentCategories: Array<string>;
	categories: Array<{
		slug: string;
		category: string;
	}>;
};

const CategoriesSelector: FC<CategoriesSelectorProps> = ({
	currentCategories,
	categories,
}) => (
	<ul className={styles.categoriesSelector}>
		{categories.map((category, i) => (
			<li
				key={category.slug}
				className={classNames(styles.item, {
					[styles.active]:
						(currentCategories.length === 0 && i === 0) ||
						currentCategories.includes(category.slug),
				})}
			>
				<a href={`/article/${category.slug}`.replace(/\/$/, '')}>
					{category.category}
				</a>
			</li>
		))}
	</ul>
);

export default CategoriesSelector;
