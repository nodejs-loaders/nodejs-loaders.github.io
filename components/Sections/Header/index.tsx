import Link from 'next/link';
import type { FC } from 'react';
import { ButtonLink } from '~/components/Common/Button/Link/index.tsx';
import { GithubIcon } from '~/components/Icons/Github.tsx';
import { Logo } from '~/components/Icons/Logo.tsx';

const NAVIGATION = [
	{
		href: '/article',
		label: 'Article',
	},
	{
		href: '/#lastest-article',
		label: 'Lastest Article',
	},
];

export const Header: FC = () => (
	<header className="flex w-full flex-col flex-wrap items-center justify-between gap-2 border-gray-600 border-b-2 bg-gray-50 px-4 py-2 text-gray-600 sm:flex-row dark:bg-gray-900 dark:text-gray-300">
		<Link
			className="inline-flex cursor-pointer items-center gap-2 rounded px-1 py-0.5 text-lg hover:bg-gray-200 hover:dark:bg-gray-800"
			href="/"
		>
			<Logo aria-label="Nodejs-loaders Logo" height={32} width={32} />
			Nodejs-loaders
		</Link>
		<nav className="flex items-center gap-4">
			<ul className="flex items-center gap-4">
				{NAVIGATION.map((item) => (
					<li key={item.href}>
						<ButtonLink href={item.href} kind="special">
							{item.label}
						</ButtonLink>
					</li>
				))}
				<li>
					<Link href="https://github.com/nodejs-loaders">
						<GithubIcon
							aria-label="Github"
							className="rounded-xs p-1 hover:bg-gray-200 hover:dark:bg-gray-800"
							height={32}
							width={32}
						/>
					</Link>
				</li>
			</ul>
		</nav>
	</header>
);
