import type { FC } from 'react';
import { ButtonLink } from '~/components/Common/Button/Link/index.tsx';
import { NPMIcon } from '~/components/Icons/NPM.tsx';

export const Hero: FC = () => (
	<section className="flex h-[calc(100vh-4rem)] w-full flex-col items-center justify-center gap-8 bg-gradient-to-b from-transparent via-green-50/50 to-green-50 px-10 dark:from-transparent dark:via-green-800/25 dark:to-green-800">
		<h1 className="text-center font-bold text-4xl">
			<code className="rounded-sm bg-gray-200 p-1 dark:bg-gray-800 dark:text-gray-200">
				Nodejs-Loaders
			</code>{' '}
			- A collection of loaders for Node.js
		</h1>
		<p className="text-center *:dark:text-gray-200">
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
				Discover us on NPM{' '}
				<NPMIcon aria-label="NPM Logo" height={64} width={64} />
			</ButtonLink>
		</div>
	</section>
);
