import styles from './index.module.css';
import type { FC } from 'react';
import type { PostFrontmatter } from '~/types/frontmatter';

type ArticleCardProps = PostFrontmatter & {
	slug: string;
};

const ArticleCard: FC<ArticleCardProps> = ({
	title,
	description,
	authors,
	date,
	slug,
}) => (
	<div className={styles.content}>
		<h2 className={styles.title}>
			<a href={`article/post/${slug}`}>{title}</a>
		</h2>
		<p className={styles.description}>{description}</p>
		<div className={styles.meta}>
			<span className={styles.author}>
				{authors.split(',').slice(0, 2).join(', ')}
			</span>
			<span className={styles.date}>{date}</span>
		</div>
	</div>
);

export default ArticleCard;
