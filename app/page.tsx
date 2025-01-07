import ButtonLink from '~/components/Common/Button/Link';
import LastestArticle from '~/components/Post/LastestArticle';
import type { FC } from 'react';

const Page: FC = () => (
	<main>
		<section className='flex h-[calc(100vh-4rem)] w-full flex-col items-center justify-center gap-8 bg-gradient-to-b from-transparent via-green-50/50 to-green-50 px-10 dark:from-transparent dark:via-gray-900 dark:to-gray-800'>
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
			className='bg-green-50 px-10 py-8 dark:bg-gray-800'
		>
			<h2 className="font-bold text-2xl dark:text-white">Lastes Articles</h2>
			<LastestArticle limit={3} />
		</section>
	</main>
);

export default Page;
