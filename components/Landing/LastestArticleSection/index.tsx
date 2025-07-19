import type { FC } from 'react';
import { LastestArticle } from '~/components/Post/LastestArticle/index.tsx';

export const LatestArticleSection: FC = () => (
	<section
		className="bg-green-50 px-10 py-8 dark:bg-green-800"
		id="lastest-article"
	>
		<div className="mb-8 border-gray-600 border-b-2 dark:border-gray-200">
			<h2 className="mb-2 font-bold text-3xl dark:text-white">
				Lastes Articles
			</h2>
			<p className="font-semibold text-gray-600 dark:text-gray-200">
				Discover the lastest articles about Nodejs-Loaders
			</p>
		</div>
		<LastestArticle limit={3} />
	</section>
);
