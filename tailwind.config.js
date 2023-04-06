module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
		fontFamily: {
			signature: ["Great Vibes"],
			name: ["Permanent Marker"],
			logo: ["Tangerine"],
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["winter", "lofi", "dark", "cupcake", "forest", "night"],
	},
};
