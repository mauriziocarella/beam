import {type Config} from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				content: 'var(--content)',
				primary: {
					DEFAULT: '#8B5CF6',
					50: '#B99DFA',
					100: '#B496F9',
					200: '#AA87F8',
					300: '#A079F8',
					400: '#956AF7',
					500: '#8B5CF6',
					600: '#7D49F5',
					700: '#6F35F4',
					800: '#6222F3',
					900: '#540FF2',
					950: '#500DE9',
				},
				secondary: {
					DEFAULT: '#FF00F7',
					50: '#FF8AFB',
					100: '#FF7AFB',
					200: '#FF5CFA',
					300: '#FF3DF9',
					400: '#FF1FF8',
					500: '#FF00F7',
					600: '#EB00E3',
					700: '#D600CF',
					800: '#C200BC',
					900: '#AD00A8',
					950: '#A3009E',
				},
			},
			borderColor: {
				DEFAULT: 'var(--border-color)',
			},
			gap: {
				DEFAULT: defaultTheme.spacing[4],
			},
		},
	},
	plugins: [],
} satisfies Config;
