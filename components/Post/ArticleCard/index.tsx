import styles from './index.module.css';
import { postSlug2Href } from '~/utils/postUtils.ts';
import type { FC } from 'react';
import type { PostFrontmatter } from '~/types/frontmatter.ts';

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
	<Component className={styles.content}>
		<h2 className={styles.title}>
			<a href={postSlug2Href(slug)}>{title}</a>
		</h2>
		<p className={styles.description}>{description}</p>
		<div className={styles.meta}>
			<span className={styles.author}>
				{authors.split(',').slice(0, 2).join(', ')}
			</span>
			<span className={styles.date}>{date}</span>
		</div>
	</Component>
);
