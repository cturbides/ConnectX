/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {
			colors: {
				'main-white': '#F9F9F9',
				'main-black': '#211A1D',
				'main-violet':'#6936F5',
			},
			fontFamily: {
				'ranga': ['Ranga', 'cursive'],
				'ramabhadra': ['Ramabhadra', 'sans-serif']
			}
		},
	},
	plugins: [],
};
