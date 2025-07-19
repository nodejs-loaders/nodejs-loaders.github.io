import fs from 'node:fs/promises';
import type { PostFrontmatter } from '~/types/frontmatter.ts';
import { getContent } from './content.ts';

export const getAllPosts = async () => {
	const posts = await fs.readdir('content/post');

	return posts.filter((post) => post.endsWith('.mdx'));
};

export const getPostsMetadata = async (category?: string) => {
	const posts = await getAllPosts();
	const result: Array<PostFrontmatter & { slug: string }> = [];

	for (const post of posts) {
		const slugs = post.split('.').slice(0, -1);
		const content = await getContent<PostFrontmatter>(['post', ...slugs]);

		if (!content) continue;

		result.push({
			...content.frontmatter,
			slug: slugs.join('/'),
		});
	}

	if (category) return result.filter((post) => post.category === category);

	return result;
};
