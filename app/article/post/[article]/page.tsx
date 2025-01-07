import { notFound } from 'next/navigation';
import { getContent } from '~/lib/content';
import { getAllPosts } from '~/lib/post';
import ArticleHeader from '~/components/Post/ArticleHeader';
import styles from './page.module.css';
import type { FC } from 'react';
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
