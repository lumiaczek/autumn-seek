import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'main': '#0f0e17',
				'sec': '#f25f4c',
				'accent': '#ff8906',
				'text':'#a7a9be',
				'headline': '#fffffe'
			}
		}
	},

	plugins: []
} satisfies Config;
