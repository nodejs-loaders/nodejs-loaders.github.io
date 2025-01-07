import ButtonLink from '~/components/Common/Button/Link';
import LastestArticle from '~/components/Post/LastestArticle';
import type { FC } from 'react';

const Page: FC = () => (
	<main>
		<section className="flex h-[calc(100vh-4rem)] w-full flex-col items-center justify-center gap-8 bg-gradient-to-b from-transparent via-green-50/50 to-green-50 px-10 dark:from-transparent dark:via-green-800/25 dark:to-green-800">
			<h1 className="text-center font-bold text-4xl dark:text-white">
				<code className="rounded bg-gray-200 p-1 dark:bg-gray-800 dark:text-gray-200">
					Nodejs-Loaders
				</code>{' '}
				- A collection of loaders for Node.js
			</h1>
			<p className="text-center dark:text-gray-200">
				This project is a collection of loaders for Node.js. It's allow you to
				have a lightweight and fast devlopment or testing environment.
			</p>
			<div className="flex gap-4">
				<ButtonLink href="article/post/what-is-nodejs-loaders">
					Read more about us
				</ButtonLink>
				<ButtonLink
					href="https://www.npmjs.com/org/nodejs-loaders"
					kind="secondary"
				>
					Discover us on NPM
				</ButtonLink>
			</div>
		</section>
		<section
			id="lastest-article"
			className="bg-green-50 px-10 py-8 dark:bg-green-800"
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
	</main>
);

export default Page;
