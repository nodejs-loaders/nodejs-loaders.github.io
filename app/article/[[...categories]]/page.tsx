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
const CATEGORIES = ['use-cases', 'releases'];

export async function generateStaticParams() {
	const params = [
		{ categories: [] }, // For the base route without any categories
		...CATEGORIES.map(category => ({ categories: [category] })), // For each individual category
	];

	return params;
}

const Page: FC<PageProps> = async ({ params }) => {
	const currentCategories = (await params).categories || [];

	return (
		<main>
			<h1 className="font-bold text-3xl lg:text-4xl">Article list</h1>
			<ul className="flex space-x-2 border-green-500 border-b-2 text-gray-800 dark:text-gray-200">
				<li>
					<a
						href="/article"
						className={currentCategories.length === 0 ? 'bg-green-500' : ''}
					>
						All articles
					</a>
				</li>
				{CATEGORIES.map(category => (
					<li key={category}>
						<a
							href={`/article/${category}`}
							className={
								currentCategories.includes(category) ? 'bg-green-500' : ''
							}
						>
							{category}
						</a>
					</li>
				))}
			</ul>
		</main>
	);
};

export default Page;
