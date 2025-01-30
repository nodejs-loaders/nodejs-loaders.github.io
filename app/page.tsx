import { Hero } from '~/components/Landing/Hero/index.tsx';
import { LastestArticleSection } from '~/components/Landing/LastestArticleSection/index.tsx';
import type { FC } from 'react';

const Page: FC = () => (
	<main>
		<Hero />
		<LastestArticleSection />
	</main>
);

export default Page;
