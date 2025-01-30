import { getPostsMetadata } from '~/lib/post';
import ArticleCard from '../ArticleCard/index.tsx';
import styles from './index.module.css';
import type { FC } from 'react';

type LastestArticleProps = {
	limit: number;
};

const LastestArticle: FC<LastestArticleProps> = async ({ limit }) => {
	const postsMetadata = await getPostsMetadata();

	const usedPostsMetadata = postsMetadata.slice(0, limit).sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	return (
		<div className={styles.wrapper}>
			{usedPostsMetadata.length === 0 ? (
				<p>No posts found.</p>
			) : (
				<ul>
					{usedPostsMetadata.map(postMetadata => (
						<li key={postMetadata.slug}>
							<ArticleCard {...postMetadata} as="li" />
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default LastestArticle;
