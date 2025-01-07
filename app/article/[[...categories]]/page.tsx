import CategoriesSelector from '~/components/Common/CategoriesSelector';
import { getPostsMetadata } from '~/lib/post';
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
		category: 'information',
		slug: 'information',
	},
	{
		category: 'use-cases',
		slug: 'use-cases',
	},
	{
		category: 'releases',
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
		<main>
			<h1 className="font-bold text-3xl lg:text-4xl">Article list</h1>
			<CategoriesSelector
				currentCategories={currentCategories}
				categories={CATEGORIES}
			/>
			<div>
				{postsMetadata.map(post => (
					<div key={post.title}>
						<h2>{post.title}</h2>
						<p>{post.description}</p>
					</div>
				))}
			</div>
		</main>
	);
};

export default Page;
