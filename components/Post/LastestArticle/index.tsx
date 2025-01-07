import type { FC } from 'react';
import { getPostsMetadata } from '~/lib/post';
import ArticleCard from '../ArticleCard/index.tsx';

type LastestArticleProps = {
	limit: number;
};

const LastestArticle: FC<LastestArticleProps> = async ({ limit }) => {
	const postsMetadata = await getPostsMetadata();

	const usedPostsMetadata = postsMetadata.slice(0, limit);

	return (
		<div>
			{usedPostsMetadata.length === 0 ? (
				<p>No posts found.</p>
			) : (
				<ul>
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
