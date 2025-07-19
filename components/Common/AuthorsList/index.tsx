import type { FC } from 'react';
import { getGitHubAvatarUrl, getGithubProfileUrl } from '~/utils/gitHubUtils';
import { getAcronymFromString } from '~/utils/stringUtils';
import { Avatar, AvatarFallback, AvatarImage } from '../Avatar/index.tsx';

type AuthorsListProps = {
	// xxx, yyy, zzz
	authors: string;
};

export const AuthorsList: FC<AuthorsListProps> = ({ authors }) => {
	const authorsList = authors.split(', ').map((author) => (
		<Avatar key={author}>
			<a
				href={getGithubProfileUrl(author)}
				rel="noopener noreferrer"
				target="_blank"
			>
				<AvatarImage alt={author} src={getGitHubAvatarUrl(author)} />
				<AvatarFallback>{getAcronymFromString(author)}</AvatarFallback>
			</a>
		</Avatar>
	));

	return <div className="flex space-x-2 py-2">{authorsList}</div>;
};
