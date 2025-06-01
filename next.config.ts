import withRspack from 'next-rspack';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	output: 'export',
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default process.env.NODE_ENV === 'production'
	? nextConfig
	: withRspack(nextConfig);
