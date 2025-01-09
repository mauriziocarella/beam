import {type Config} from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
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
			},
			borderColor: {
				DEFAULT: colors.gray[300],
			},
			gap: {
				DEFAULT: defaultTheme.spacing[4],
			},
		},
	},
	plugins: [],
} satisfies Config;
