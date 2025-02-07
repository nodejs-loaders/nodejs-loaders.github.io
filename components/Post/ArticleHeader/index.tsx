import { AuthorsList } from '~/components/Common/AuthorsList/index.tsx';
import styles from './index.module.css';
import type { FC } from 'react';

type ArticleHeaderProps = {
	title: string;
	description: string;
	authors: string;
};

export const ArticleHeader: FC<ArticleHeaderProps> = ({
	title,
	description,
	authors,
}) => (
	<header className={styles.header}>
		<h1>{title}</h1>
		<p>{description}</p>
		<AuthorsList authors={authors} />
	</header>
);
