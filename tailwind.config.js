/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
  theme: {
    screens: {
			// Mobile
			ms: '320px',
			mm: '375px',
			ml: '425px',
			mxl: '480px',

			// Tablet
			ts: '540px',
			tm: '640px',
			tl: '720px',
			txl: '840px',

			// Laptop
			ls: '960px',
			lm: '1040px',
			ll: '1140px',
			lxl: '1220px',
			
      // large screens
      xl1: '1320px',
			xl2: '1420px',
			xl3: '1540px',
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
};
