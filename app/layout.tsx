import classNames from 'classnames';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Header from '~/components/Sections/Header';
import type { FC, PropsWithChildren } from 'react';
import '~/styles/globals.css';

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
	<html lang="en">
		<body className={classNames(GeistSans.className, GeistMono.className)}>
			<Header />
			{children}
		</body>
	</html>
);

export default RootLayout;
