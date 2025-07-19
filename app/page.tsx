import type { FC } from 'react';
import { Hero } from '~/components/Landing/Hero/index.tsx';
import { LatestArticleSection } from '~/components/Landing/LastestArticleSection/index.tsx';

const Page: FC = () => (
	<main>
		<Hero />
		<LatestArticleSection />
	</main>
);

export default Page;
