import CategoriesSelector from '~/components/Common/CategoriesSelector';
import { getPostsMetadata } from '~/lib/post';
import type { FC } from 'react';
import ArticleCard from '~/components/Post/ArticleCard';

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
		<main className="container mx-auto px-4 py-8">
			<h1 className="mb-4 font-bold text-3xl lg:text-4xl">Article list</h1>
			<p className="mb-4 max-w-screen-md text-gray-500 dark:text-gray-400">
				Here you can find all the articles available on the website. You can
				filter them by category using the dropdown below.
			</p>
			<CategoriesSelector
				currentCategories={currentCategories}
				categories={CATEGORIES}
			/>
			{postsMetadata.length === 0 ? (
				<div className="mt-8 ">
					<p className="bg-gradient-to-r from-green-300 to-green-800 bg-clip-text text-center font-black text-3xl text-transparent">
						No articles here for now
					</p>
				</div>
			) : (
				<div className="grid grid-cols-1 justify-center gap-4 md:grid-cols-2 lg:grid-cols-3">
					{postsMetadata.map(post => (
						<ArticleCard key={post.slug} {...post} />
					))}
				</div>
			)}
		</main>
	);
};

export default Page;
