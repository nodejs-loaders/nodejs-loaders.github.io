import classNames from 'classnames';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import type { FC, PropsWithChildren } from 'react';
import '~/styles/globals.css';

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
	<html lang="en">
		<body className={classNames(GeistSans.className, GeistMono.className)}>
			{children}
		</body>
	</html>
);

export default RootLayout;
