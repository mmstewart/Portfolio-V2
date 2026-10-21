import * as React from 'react'
import { Icon } from '@iconify/react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const links = [
	{ icon: 'mdi:github', url: 'https://github.com/mmstewart', name: 'GitHub' },
	{ icon: 'mdi:linkedin', url: 'https://linkedin.com/in/marcusmstewart', name: 'LinkedIn' },
	{ icon: 'mdi:email', url: 'mailto:mss.stewart1@gmail.com', name: 'Email' },
]

const ContactPage = () => (
	<Layout
		title='Contact'
		subtitle="Let's get in touch!"
		centered>
		<ul className='flex flex-col items-center gap-4 sm:flex-row sm:gap-10'>
			{links.map(({ icon, url, name }) => (
				<li key={name}>
					<a
						href={url}
						{...(url.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
						className='flex items-center gap-2 text-base transition hover:text-sky-500 lg:text-lg'>
						<Icon
							icon={icon}
							className='size-6'
						/>
						{name}
					</a>
				</li>
			))}
		</ul>
	</Layout>
)

export default ContactPage

export const Head = () => (
	<Seo
		title='Contact'
		description='Get in touch with Marcus Stewart, full-stack software engineer.'
	/>
)
