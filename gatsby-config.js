/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	trailingSlash: 'never',
	siteMetadata: {
		title: 'Marcus Stewart',
		description: 'Full Stack Developer portfolio.',
		author: '@MarcusStewart',
		siteUrl: 'https://www.marcusstewart.me',
	},
	plugins: [
		'gatsby-plugin-postcss',
		`gatsby-plugin-react-helmet`,
		`react-helmet`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
	],
};
