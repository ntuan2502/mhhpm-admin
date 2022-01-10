module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				Mulish: ['Mulish'],
				Muli: ['Muli'],
			},
			colors: { black_RGBA: 'rgba(0,0,0,0.3)' },
		},
	},
	plugins: [],
};
