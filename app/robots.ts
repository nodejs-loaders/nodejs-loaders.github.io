import type { MetadataRoute } from 'next';

// Enforce static generation for robots.txt
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
	return {
		host: 'https://nodejs-loaders.github.io',
		rules: {
			allow: '/',
			userAgent: '*',
		},
	};
}
