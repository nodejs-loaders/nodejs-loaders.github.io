import type { Config } from 'tailwindcss';

export default {
	content: ['./components/**/*.tsx', './app/**/*.tsx'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-geist-sans)'],
				mono: ['var(--font-geist-mono)'],
			},
		},
	},
} as Config;
