import Link from 'next/link';
import { ButtonLink } from '~/components/Common/Button/Link/index.tsx';
import { Logo } from '~/components/Icons/Logo.tsx';
import { GithubIcon } from '~/components/Icons/Github.tsx';
import styles from './index.module.css';
import type { FC } from 'react';

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
	<header className={styles.header}>
		<Link href="/" className={styles.logo}>
			<Logo width={32} height={32} aria-label="Nodejs-loaders Logo" />
			Nodejs-loaders
		</Link>
		<nav className={styles.nav}>
			<ul>
				{NAVIGATION.map(item => (
					<li key={item.href}>
						<ButtonLink href={item.href} kind="special">
							{item.label}
						</ButtonLink>
					</li>
				))}
				<li>
					<Link href="https://github.com/nodejs-loaders">
						<GithubIcon width={32} height={32} aria-label="Github" />
					</Link>
				</li>
			</ul>
		</nav>
	</header>
);
