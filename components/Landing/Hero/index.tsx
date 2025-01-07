import ButtonLink from '~/components/Common/Button/Link';
import styles from './index.module.css';
import type { FC } from 'react';

const Hero: FC = () => (
	<section className={styles.hero}>
		<h1>
			<code>Nodejs-Loaders</code> - A collection of loaders for Node.js
		</h1>
		<p>
			This project is a collection of loaders for Node.js. It's allow you to
			have a lightweight and fast devlopment or testing environment.
		</p>
		<div className={styles.actions}>
			<ButtonLink href="article/post/what-is-nodejs-loaders">
				Read more about us
			</ButtonLink>
			<ButtonLink
				href="https://www.npmjs.com/org/nodejs-loaders"
				kind="secondary"
			>
				Discover us on NPM
			</ButtonLink>
		</div>
	</section>
);

export default Hero;
