import { notFound } from 'next/navigation';
import type { FC } from 'react';
import { getContent } from '~/lib/content';
import { getGitHubAvatarUrl } from '~/utils/gitHubUtils';

type postParams = {
	article: string;
};

type PageProps = {
	params: Promise<postParams>;
};

const Page: FC<PageProps> = async ({ params }) => {
	const article = (await params).article;
	const slugs = ['post', article];

	const mdxResult = await getContent<{
		title: string;
		description: string;
		authors: string;
	}>(slugs);

	if (!mdxResult) notFound();

	const { content, frontmatter } = mdxResult;
	const authors = frontmatter.authors.split(',').map(author => author.trim());

	return (
		<main className="container mx-auto px-4">
			<header className="my-8 border-gray-200 border-b-2 dark:border-gray-800">
				<h1 className="font-bold text-3xl">{frontmatter.title}</h1>
				<p className="text-gray-500 text-lg dark:text-gray-400">
					{frontmatter.description}
				</p>
				<div className="flex items-center space-x-2">
					{authors.map(author => (
						<img
							key={author}
							src={getGitHubAvatarUrl(author)}
							alt={author}
							className="size-8 rounded-full"
						/>
					))}
				</div>
			</header>
			<article className="prose dark:prose-dark">{content}</article>
		</main>
	);
};

export default Page;
