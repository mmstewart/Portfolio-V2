import * as React from 'react'
import useSiteMetadata from '../hooks/use-site-metadata'
import gradientFavicon from '../images/gradientFavicon.png'

export default function Seo({ title, description, children }) {
	const site = useSiteMetadata()
	const metaTitle = title ? `${title} | ${site.title}` : site.title

	return (
		<>
			<html
				lang='en'
				data-theme='light'
			/>
			<title>{metaTitle}</title>
			<meta
				name='description'
				content={description || site.description}
			/>
			<meta
				name='author'
				content={site.author}
			/>
			<link
				rel='icon'
				type='image/png'
				href={gradientFavicon}
			/>
			{children}
		</>
	)
}
