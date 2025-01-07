import ButtonLink from '~/components/Common/Button/Link';
import type { FC } from 'react';

const NotFoundPage: FC = () => (
	<main className="flex h-screen flex-col items-center justify-center gap-4">
		<h1 className="font-bold text-4xl">404 - Page Not Found</h1>
		<p className="mt-4 text-gray-600 text-lg dark:text-gray-300">
			The page you are looking for , does not exist.
		</p>
		<ButtonLink href="/">Go to Home</ButtonLink>
	</main>
);

export default NotFoundPage;
