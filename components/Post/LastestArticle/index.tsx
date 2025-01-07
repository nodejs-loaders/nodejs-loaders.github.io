import type { FC } from 'react';
import { getPostsMetadata } from '~/lib/post';
import ArticleCard from '../ArticleCard/index.tsx';

type LastestArticleProps = {
	limit: number;
};

const LastestArticle: FC<LastestArticleProps> = async ({ limit }) => {
	const postsMetadata = await getPostsMetadata();

	const usedPostsMetadata = postsMetadata.slice(0, limit).sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	return (
		<div className="w-full">
			{usedPostsMetadata.length === 0 ? (
				<p>No posts found.</p>
			) : (
				<ul className="flex flex-col items-center justify-between gap-4 xl:flex-row">
					{usedPostsMetadata.map(postMetadata => (
						<li key={postMetadata.slug}>
							<ArticleCard {...postMetadata} />
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default LastestArticle;
