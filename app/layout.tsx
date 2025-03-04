import classNames from 'classnames';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Header } from '~/components/Sections/Header/index.tsx';
import type { FC, PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import '~/styles/globals.css';

const metadata: Metadata = {
	title: 'Nodejs-Loaders',
	description: 'A collection of loaders for Node.js',
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
