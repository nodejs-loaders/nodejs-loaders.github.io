import { Hero } from '~/components/Landing/Hero/index.tsx';
import { LatestArticleSection } from '~/components/Landing/LatestArticleSection/index.tsx';
import type { FC } from 'react';

const Page: FC = () => (
	<main>
		<Hero />
		<LatestArticleSection />
	</main>
);

export default Page;
