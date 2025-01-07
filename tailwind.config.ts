import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./components/**/*.tsx', './app/**/*.tsx'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-geist-sans)'],
				mono: ['var(--font-geist-mono)'],
			},
			colors: {
				green: {
					50: '#f6fbea',
					100: '#e9f5d2',
					200: '#d3ecaa',
					300: '#b6de78',
					400: '#99ce4d',
					500: '#7bb32f',
					600: '#5e8e22',
					700: '#46691d', // logo color
					800: '#3c571d',
					900: '#344a1d',
					950: '#19280b',
				},
			},
		},
	},
	plugins: [typography],
} as Config;
