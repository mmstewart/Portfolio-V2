import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Trustbar from '../components/trustbar'

const skills = [
	{ icon: 'simple-icons:gnubash', name: 'Bash' },
	{ icon: 'devicon-plain:csharp', name: 'C#' },
	{ icon: 'simple-icons:php', name: 'PHP' },
	{ icon: 'simple-icons:javascript', name: 'JavaScript' },
	{ icon: 'simple-icons:html5', name: 'HTML' },
	{ icon: 'simple-icons:css3', name: 'CSS' },
	{ icon: 'devicon-plain:vscode', name: 'VS Code' },
	{ icon: 'simple-icons:laravel', name: 'Laravel' },
	{ icon: 'file-icons:vue', name: 'Vue.js' },
	{ icon: 'simple-icons:gatsby', name: 'Gatsby' },
	{ icon: 'simple-icons:dotnet', name: '.NET' },
	{ icon: 'simple-icons:github', name: 'Git' },
	{ icon: 'simple-icons:tailwindcss', name: 'Tailwind CSS' },
	{ icon: 'mdi:server', name: 'Servers' },
	{ icon: 'simple-icons:linux', name: 'Linux' },
	{ icon: 'simple-icons:claude', name: 'Claude' },
	{ icon: 'simple-icons:postman', name: 'Postman' },
]

const AboutPage = () => (
	<Layout title='About'>
		<p className='max-w-xl text-base leading-relaxed text-left text-pretty lg:text-lg'>
			Hi, I’m Marcus Stewart, a Laravel and Vue developer who builds web applications that solve real business
			problems. I use AI tools throughout my workflow to move faster, but I care just as much about simple
			solutions and clean, well-tested code that’s easy to maintain long after it ships.
		</p>
		<div className='flex flex-col items-center w-full gap-4'>
			<p className='font-medium text-sky-500'>I work with a range of tools and technologies, including:</p>
			<Trustbar skills={skills} />
		</div>
	</Layout>
)

export default AboutPage

export const Head = () => (
	<Seo
		title='About'
		description='About Marcus Stewart, full-stack software engineer building web applications with Laravel, Vue, and AI.'
	/>
)
