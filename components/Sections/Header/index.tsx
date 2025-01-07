import Link from 'next/link';
import Logo from '~/components/Icons/Logo';
import ButtonLink from '~/components/Common/Button/Link';
import styles from './index.module.css';
import type { FC } from 'react';
import GithubIcon from '~/components/Icons/Github';

const NAVIGATION = [
	{
		href: '/article',
		label: 'Article',
	},
	{
		href: '#lastest-article',
		label: 'Lastest Article',
	},
];

const Header: FC = () => (
	<header className={styles.header}>
		<Link href="/" className={styles.logo}>
			<Logo width={32} height={32} />
			Nodejs-loaders
		</Link>
		<nav className={styles.nav}>
			<ul>
				{NAVIGATION.map(item => (
					<li key={item.href}>
						<ButtonLink href={item.href}>{item.label}</ButtonLink>
					</li>
				))}
				<li>
					<Link href="https://github.com/nodejs-loaders">
						<GithubIcon width={32} height={32} />
					</Link>
				</li>
			</ul>
		</nav>
	</header>
);

export default Header;
