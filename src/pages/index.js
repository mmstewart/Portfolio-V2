import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => (
	<Layout
		title='Marcus Stewart'
		subtitle='Full-Stack Software Engineer'
		centered
	/>
)

export default IndexPage

export const Head = () => (
	<Seo
		title='Home'
		description='Marcus Stewart, full-stack software engineer building web applications with Laravel, Vue, and AI.'
	/>
)
