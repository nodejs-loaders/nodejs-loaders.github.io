import LastestArticle from '~/components/Post/LastestArticle';
import styles from './index.module.css';
import type { FC } from 'react';

const LastestArticleSection: FC = () => (
	<section id="lastest-article" className={styles.section}>
		<div className={styles.header}>
			<h2>Lastes Articles</h2>
			<p>Discover the lastest articles about Nodejs-Loaders</p>
		</div>
		<LastestArticle limit={3} />
	</section>
);

export default LastestArticleSection;
