import { notFound } from 'next/navigation';
import { getContent } from '~/lib/content.ts';
import { getAllPosts } from '~/lib/post.ts';
import { ArticleHeader } from '~/components/Post/ArticleHeader/index.tsx';
import styles from './page.module.css';
import type { FC } from 'react';
import type { Metadata } from 'next';
import type { PostFrontmatter } from '~/types/frontmatter';
import '~/styles/markdown.css';

type PostParams = {
	article: string;
};

type PageProps = {
	params: Promise<PostParams>;
};

export async function generateStaticParams() {
	const posts = await getAllPosts();

	return posts.map(post => {
		const article = post.split('.').slice(0, -1).join('.');
		return { article };
	});
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const article = (await params).article;
	const slugs = ['post', article];

	const mdxResult = await getContent<PostFrontmatter>(slugs);

	if (!mdxResult) notFound();

	const { frontmatter } = mdxResult;

	return {
		title: frontmatter.title,
		description: frontmatter.description,
	};
}

const Page: FC<PageProps> = async ({ params }) => {
	const article = (await params).article;
	const slugs = ['post', article];

	const mdxResult = await getContent<PostFrontmatter>(slugs);

	if (!mdxResult) notFound();

	const { content, frontmatter } = mdxResult;

	return (
		<main className={styles.page}>
			<ArticleHeader
				title={frontmatter.title}
				description={frontmatter.description}
				authors={frontmatter.authors}
			/>
			<article className="md-content">{content}</article>
		</main>
	);
};

export default Page;
