import type { NextConfig } from 'next';

export default {
	output: 'export',
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
} as NextConfig;
