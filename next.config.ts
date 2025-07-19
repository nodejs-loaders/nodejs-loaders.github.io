import type { NextConfig } from 'next';
import withRspack from 'next-rspack';

const nextConfig: NextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	output: 'export',
	typescript: {
		ignoreBuildErrors: true,
	},
};

export default process.env.NODE_ENV === 'production'
	? nextConfig
	: withRspack(nextConfig);
