import { notFound } from 'next/navigation';
import { getContent } from '~/lib/content';
import { getAllPosts } from '~/lib/post';
import AuthorsList from '~/components/Common/AuthorsList';
import type { FC } from 'react';
import type { PostFrontmatter } from '~/types/frontmatter';
import '~/styles/markdown.css';

type postParams = {
	article: string;
};

type PageProps = {
	params: Promise<postParams>;
};

export async function generateStaticParams() {
	const posts = await getAllPosts();

	return posts.map(post => {
		const article = post.split('.').slice(0, -1).join('.');
		return { article };
	});
}

const Page: FC<PageProps> = async ({ params }) => {
	const article = (await params).article;
	const slugs = ['post', article];

	const mdxResult = await getContent<PostFrontmatter>(slugs);

	if (!mdxResult) notFound();

	const { content, frontmatter } = mdxResult;

	return (
		<main className="container mx-auto px-4">
			<header className="my-8 border-gray-200 border-b-2 dark:border-gray-800">
				<h1 className="font-bold text-3xl lg:text-4xl">{frontmatter.title}</h1>
				<p className="text-gray-500 text-lg dark:text-gray-400">
					{frontmatter.description}
				</p>
				<AuthorsList authors={frontmatter.authors} />
			</header>
			<article className="md-content">{content}</article>
		</main>
	);
};

export default Page;
