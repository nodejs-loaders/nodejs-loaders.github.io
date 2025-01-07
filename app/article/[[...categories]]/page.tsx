import CategoriesSelector from '~/components/Common/CategoriesSelector';
import { getPostsMetadata } from '~/lib/post';
import ArticleCard from '~/components/Post/ArticleCard';
import styles from './page.module.css';
import type { FC } from 'react';

type categoriesParams = {
	categories?: string[];
};

type PageProps = {
	params: Promise<categoriesParams>;
};

/**
 * List of available categories
 */
const CATEGORIES = [
	{
		category: 'All articles',
		slug: '',
	},
	{
		category: 'Information',
		slug: 'information',
	},
	{
		category: 'Use cases',
		slug: 'use-cases',
	},
	{
		category: 'Releases',
		slug: 'releases',
	},
];

export const generateStaticParams = () => {
	const params = [
		{ categories: [] }, // For the base route without any categories
		...CATEGORIES.slice(1).map(category => ({ categories: [category.slug] })), // For each individual category
	];

	return params;
};

const Page: FC<PageProps> = async ({ params }) => {
	const currentCategories = (await params).categories || [];
	const postsMetadata = await getPostsMetadata(currentCategories[0]);

	return (
		<main className={styles.page}>
			<h1>Article list</h1>
			<p>
				Here you can find all the articles available on the website. You can
				filter them by category using the dropdown below.
			</p>
			<CategoriesSelector
				currentCategories={currentCategories}
				categories={CATEGORIES}
			/>
			{postsMetadata.length === 0 ? (
				<div className={styles.noArticles}>
					<p>No articles here for now</p>
				</div>
			) : (
				<div className={styles.articles}>
					{postsMetadata.map(post => (
						<ArticleCard key={post.slug} {...post} />
					))}
				</div>
			)}
		</main>
	);
};

export default Page;
