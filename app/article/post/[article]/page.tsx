import type { FC } from 'react';

type postParams = {
	article: string;
};

type PageProps = {
	params: Promise<postParams>;
};

const Page: FC<PageProps> = async ({ params }) => (
	<main>
		<h1>article: {(await params).article}</h1>
	</main>
);

export default Page;
