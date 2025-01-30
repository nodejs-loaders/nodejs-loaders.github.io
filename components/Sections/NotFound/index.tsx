import { ButtonLink } from '~/components/Common/Button/Link/index.tsx';
import styles from './index.module.css';
import type { FC } from 'react';

export const NotFoundSection: FC = () => (
	<main className={styles.wrapper}>
		<h1>404 - Page Not Found</h1>
		<p>The page you are looking for , does not exist.</p>
		<ButtonLink href="/">Go to Home</ButtonLink>
	</main>
);
