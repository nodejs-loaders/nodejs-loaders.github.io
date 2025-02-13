import { LastestArticle } from '~/components/Post/LastestArticle/index.tsx';
import styles from './index.module.css';
import type { FC } from 'react';

export const LatestArticleSection: FC = () => (
	<section id="lastest-article" className={styles.section}>
		<div className={styles.header}>
			<h2 className={styles.title}>Lastes Articles</h2>
			<p className={styles.p}>
				Discover the lastest articles about Nodejs-Loaders
			</p>
		</div>
		<LastestArticle limit={3} />
	</section>
);
