import ButtonLink from '~/components/Common/Button/Link';
import type { FC } from 'react';

const Page: FC = () => (
	<main>
		<section className="w-full h-screen flex flex-col justify-center items-center gap-8 px-10">
			<h1 className="text-4xl font-bold text-center">
				<code className="bg-gray-200 p-1 rounded dark:bg-gray-800">
					Nodejs-Loaders</code> - A collection of loaders for Node.js
			</h1>
			<p className="text-center">
				This project is a collection of loaders for Node.js. It's allow you to
				have a lightweight and fast devlopment or testing environment.
			</p>
			<div className="flex gap-4">
			<ButtonLink href="article/post/what-is-nodejs-loaders">
				Read more about us
			</ButtonLink>
			<ButtonLink href="https://www.npmjs.com/org/nodejs-loaders" kind="secondary">
				Discover us on NPM
			</ButtonLink>
			</div>
		</section>
		<section id="lastest-article">{/* lasted posts */}</section>
	</main>
);

export default Page;
