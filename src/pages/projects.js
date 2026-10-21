import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Card from '../components/card'
import Layout from '../components/layout'
import Seo from '../components/seo'

const cards = [
	{
		title: 'Nourishr',
		image: (
			<StaticImage
				src='../images/nourishr.png'
				alt='Nourishr dashboard'
				placeholder='blurred'
			/>
		),
		description:
			'A nutrition tracking app that helps users monitor their weight, set goals, and stay on top of their health journey.',
		badges: ['Laravel', 'Vue.js', 'Tailwind', 'MySQL'],
		buttons: [
			// Live demo is paused until the PHP security patch is deployed. Restore this when it's back up:
			// { label: 'Live Demo', href: 'https://nourishr-app.vercel.app', className: 'btn btn-sm btn-primary' },
			{ label: 'View Repo', href: 'https://github.com/mmstewart/nourishr', className: 'btn btn-sm btn-primary' },
		],
	},
	{
		title: 'Laravel X-Ray',
		image: (
			<StaticImage
				src='../images/x-ray.png'
				alt='Laravel X-Ray scan results in the terminal'
				placeholder='blurred'
			/>
		),
		description:
			'An open-source Laravel package that scans your app before a framework upgrade and flags compatibility issues, from PHP version requirements to outdated dependencies.',
		badges: ['PHP', 'Composer', 'Pest'],
		buttons: [
			{
				label: 'View on Packagist',
				href: 'https://packagist.org/packages/mmstewart/laravel-x-ray',
				className: 'btn btn-sm btn-primary',
			},
			{
				label: 'View Repo',
				href: 'https://github.com/mmstewart/laravel-x-ray',
				className: 'btn btn-sm btn-outline btn-primary',
			},
		],
	},
	{
		title: 'Node-RED Temperature Monitoring',
		image: (
			<StaticImage
				src='../images/nodered.png'
				alt='Node-RED temperature monitoring flow'
				placeholder='blurred'
			/>
		),
		description:
			'Built a temperature-monitoring system for a server lab that automatically shuts down the servers when the room exceeds a safe temperature.',
		badges: ['Bash', 'Node-RED'],
		buttons: [
			{
				label: 'View Repo',
				href: 'https://github.com/mmstewart/Node-RED-Temperature-Monitoring-Flow',
				className: 'btn btn-sm btn-outline btn-primary',
			},
		],
	},
	{
		title: 'Motivational Quotes',
		image: (
			<StaticImage
				src='../images/motivationalquotes.png'
				alt='Motivational Quotes homepage'
				placeholder='blurred'
			/>
		),
		description:
			'A website that pairs motivational quotes from a local database with striking images from Unsplash. Inspired by the popular Chrome extension Momentum.',
		badges: ['React', 'Unsplash API', 'SCSS'],
		buttons: [
			{ label: 'Live Demo', href: 'https://reason-quotes.netlify.app', className: 'btn btn-sm btn-primary' },
			{
				label: 'View Repo',
				href: 'https://github.com/mmstewart/Motivational-Quotes',
				className: 'btn btn-sm btn-outline btn-primary',
			},
		],
	},
]

const ProjectsPage = () => (
	<Layout title='Projects'>
		<ul className='grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
			{cards.map(card => (
				<Card
					key={card.title}
					{...card}
				/>
			))}
		</ul>
	</Layout>
)

export default ProjectsPage

export const Head = () => (
	<Seo
		title='Projects'
		description='Projects by Marcus Stewart, full-stack software engineer building web applications with Laravel, Vue, and AI.'
	/>
)
