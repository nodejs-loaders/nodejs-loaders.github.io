import { getPostsMetadata } from '~/lib/post.ts';
import { ArticleCard } from '../ArticleCard/index.tsx';
import type { FC } from 'react';

type LastestArticleProps = {
	limit: number;
};

export const LastestArticle: FC<LastestArticleProps> = async ({ limit }) => {
	const postsMetadata = await getPostsMetadata();

	const usedPostsMetadata = postsMetadata.slice(0, limit).sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	return (
		<div className="w-full">
			{usedPostsMetadata.length === 0 ? (
				<p>No posts found.</p>
			) : (
				<ul className="grid grid-cols-1 justify-center gap-4 md:grid-cols-2 lg:grid-cols-3">
					{usedPostsMetadata.map(postMetadata => (
						<ArticleCard {...postMetadata} as="li" key={postMetadata.slug} />
					))}
				</ul>
			)}
		</div>
	);
};
