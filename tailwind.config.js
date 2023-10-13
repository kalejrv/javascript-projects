/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{html,js}',
		'./projects/**/*.{html,js}',
	],
	theme: {
		fontFamily: {
			sans: ['Roboto'],
		},
		extend: {},
	},
	plugins: [],
};
