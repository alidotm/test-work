/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				schema: {
					darkBlue: "#0D13D7",
				},
			},
		},
	},
	plugins: [],
};
