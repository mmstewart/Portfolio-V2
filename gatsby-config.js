/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	trailingSlash: 'never',
	siteMetadata: {
		title: 'Marcus Stewart',
		description:
			'Portfolio of Marcus Stewart, full-stack software engineer building web applications with Laravel, Vue, and AI.',
		author: 'Marcus Stewart',
		siteUrl: 'https://www.marcusstewart.me',
	},
	plugins: ['gatsby-plugin-postcss', 'gatsby-plugin-image', 'gatsby-plugin-sharp'],
}
