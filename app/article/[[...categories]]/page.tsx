import type { FC } from 'react';

type categoriesParams = {
	categories?: string[];
};

type PageProps = {
	params: Promise<categoriesParams>;
};

const Page: FC<PageProps> = async ({ params }) => (
	<main>
		<h1>article list</h1>
		<ul>
			{((await params).categories || []).map(category => (
				<li key={category}>{category}</li>
			))}
		</ul>
	</main>
);

export default Page;
