import fs from 'node:fs/promises';
import path from 'node:path';
import { compileMDX } from 'next-mdx-remote/rsc';

const BASE_DIR = path.join(process.cwd(), 'content');

/**
 * Convert an array of slugs to a path
 */
const slugs2path = (slugs: Array<string>): string => {
	const cleanSlugs = slugs
		.map((slug) => slug.replace(/\/$/, ''))
		.filter(Boolean)
		.join('/');

	return path.join(BASE_DIR, cleanSlugs).concat('.mdx');
};

export const getRawContent = async (
	slugs: Array<string>,
): Promise<string | null> => {
	const filePath = slugs2path(slugs);

	return await fs.readFile(filePath, 'utf-8').catch(() => null);
};

export const getContent = async <TFrontmatter = Record<string, unknown>>(
	slugs: Array<string>,
) => {
	const rawContent = await getRawContent(slugs);

	if (!rawContent) return null;

	return compileMDX<TFrontmatter>({
		options: {
			parseFrontmatter: true,
		},
		source: rawContent,
	});
};
