import { getGitHubAvatarUrl, getGithubProfileUrl } from '~/utils/gitHubUtils';
import { getAcronymFromString } from '~/utils/stringUtils';
import { Avatar, AvatarImage, AvatarFallback } from '../Avatar/index.tsx';
import styles from './index.module.css';
import type { FC } from 'react';

type AuthorsListProps = {
	// xxx, yyy, zzz
	authors: string;
};

export const AuthorsList: FC<AuthorsListProps> = ({ authors }) => {
	const authorsList = authors.split(', ').map(author => (
		<Avatar key={author}>
			<a
				href={getGithubProfileUrl(author)}
				target="_blank"
				rel="noopener noreferrer"
			>
				<AvatarImage src={getGitHubAvatarUrl(author)} alt={author} />
				<AvatarFallback>{getAcronymFromString(author)}</AvatarFallback>
			</a>
		</Avatar>
	));

	return <div className={styles.wrapper}>{authorsList}</div>;
};
