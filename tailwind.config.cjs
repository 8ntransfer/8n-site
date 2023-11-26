/** @type {import('tailwindcss').Config}*/
const config = {
	important: true,
	// Active dark mode on class basis
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				check: "url('/icons/check.svg')",
				landscape: "url('/images/landscape/2.jpg')"
			})
		}
	},
	variants: {
		extend: {
			backgroundColor: ['checked'],
			borderColor: ['checked'],
			inset: ['checked'],
			zIndex: ['hover', 'active']
		}
	},
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [],
	future: {
		purgeLayersByDefault: true
	}
};

module.exports = config;
