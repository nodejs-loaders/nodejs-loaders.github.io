import AuthorsList from '~/components/Common/AuthorsList';
import styles from './index.module.css';
import type { FC } from 'react';

type ArticleHeaderProps = {
	title: string;
	description: string;
	authors: string;
};

const ArticleHeader: FC<ArticleHeaderProps> = ({
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

export default ArticleHeader;
