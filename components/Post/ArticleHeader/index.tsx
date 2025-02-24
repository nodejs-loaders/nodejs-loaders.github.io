import { AuthorsList } from '~/components/Common/AuthorsList/index.tsx';
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
	<header className="my-8 border-gray-200 border-b-2 dark:border-gray-800">
		<h1 className="font-bold text-3xl lg:text-4xl">{title}</h1>
		<p className="text-gray-500 text-lg dark:text-gray-400">{description}</p>
		<AuthorsList authors={authors} />
	</header>
);
