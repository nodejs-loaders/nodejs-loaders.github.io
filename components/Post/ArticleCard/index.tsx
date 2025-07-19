import type { FC } from 'react';
import type { PostFrontmatter } from '~/types/frontmatter.ts';
import { postSlug2Href } from '~/utils/postUtils.ts';

type ArticleCardProps = PostFrontmatter & {
	slug: string;
	as?: 'div' | 'li';
};

export const ArticleCard: FC<ArticleCardProps> = ({
	title,
	description,
	authors,
	date,
	slug,
	as: Component = 'div',
}) => (
	<Component className="max-w-96 rounded-md border-2 border-gray-600 bg-white p-4 dark:border-gray-800 dark:bg-gray-800 dark:text-white">
		<h2 className="mb-2 font-bold text-2xl text-green-600 dark:text-green-400">
			<a
				className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300"
				href={postSlug2Href(slug)}
			>
				{title}
			</a>
		</h2>
		<p className="mb-2 font-medium text-gray-700 dark:text-gray-300">
			{description}
		</p>
		<div className="flex items-center justify-between gap-1.5 text-gray-500 dark:text-gray-400">
			<span className="truncate font-medium text-gray-600 dark:text-gray-300">
				{authors.split(',').slice(0, 2).join(', ')}
			</span>
			<span className="flex-shrink-0 font-thin text-gray-600 dark:text-gray-300">
				{date}
			</span>
		</div>
	</Component>
);
