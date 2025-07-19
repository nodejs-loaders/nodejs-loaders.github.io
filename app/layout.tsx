import classNames from 'classnames';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import type { FC, PropsWithChildren } from 'react';
import { Header } from '~/components/Sections/Header/index.tsx';
import '~/styles/globals.css';

const metadata: Metadata = {
	description: 'A collection of loaders for Node.js',
	title: 'Nodejs-Loaders',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
	<html lang="en">
		<body className={classNames(GeistSans.className, GeistMono.className)}>
			<Header />
			{children}
		</body>
	</html>
);

export { metadata };
export default RootLayout;
