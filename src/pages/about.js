import * as React from 'react';
import Layout from '../components/layout';
import { Icon } from '@iconify/react';

const skills = [
	{
		icon: 'simple-icons:tailwindcss',
		name: 'Tailwind CSS',
	},
	{
		icon: 'simple-icons:gnubash',
		name: 'Bash',
	},
	{
		icon: 'devicon-plain:csharp',
		name: 'C#',
	},
	{
		icon: 'simple-icons:php',
		name: 'PHP',
	},
	{
		icon: 'simple-icons:javascript',
		name: 'JavaScript',
	},
	{
		icon: 'simple-icons:html5',
		name: 'HTML',
	},
	{
		icon: 'simple-icons:css3',
		name: 'CSS',
	},
	{
		icon: 'devicon-plain:azuresqldatabase',
		name: 'SQL',
	},
	{
		icon: 'devicon-plain:vscode',
		name: 'VS Code',
	},
	{
		icon: 'simple-icons:laravel',
		name: 'Laravel',
	},
	{
		icon: 'simple-icons:react',
		name: 'React',
	},
	{
		icon: 'simple-icons:gatsby',
		name: 'Gatsby',
	},
	{
		icon: 'simple-icons:netlify',
		name: 'Netlify',
	},
	{
		icon: 'simple-icons:dotnet',
		name: '.NET',
	},
	{
		icon: 'codicon:azure-devops',
		name: 'Azure DevOps',
	},
	{
		icon: 'simple-icons:github',
		name: 'Git',
	},
	{
		icon: 'file-icons:vue',
		name: 'Vue.js',
	},
	{
		icon: 'mdi:server',
		name: 'Servers',
	},
	{
		icon: 'simple-icons:linux',
		name: 'Linux',
	},
	{
		icon: 'simple-icons:postman',
		name: 'Postman',
	},
];

const AboutPage = () => {
	const sortedSkills = React.useMemo(
		() => [...skills].sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })),
		[]
	);

	return (
		<Layout
			title="About"
			description="Portfolio of Marcus Stewart, Full Stack Developer.">
			<div className="flex flex-col items-center text-center">
				<h1 className="leading-snug text-5xl sm:text-6xl font-semibold bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent mb-8">
					About
				</h1>
				<div className="hero-content flex-col items-stretch lg:flex-row lg:divide-x divide-base-300 gap-y-8">
					<p className="content-center max-w-lg text-justify indent-8 text-base lg:text-lg lg:pr-8">
						Hello! I'm Marcus Stewart, I build clean, performant solutions that address real business challenges. Over my
						career, I’ve learned that simplicity often leads to the most effective results. I specialize in creating
						user-centered, performance-driven web applications using modern frameworks like Laravel, Vue, and React — always
						with a focus on clean, maintainable code. My curiosity and drive for growth push me to continually expand my
						expertise in areas such as API development, testing, and scalability.
					</p>
					<div className="max-w-lg card border border-base-300 lg:pl-8">
						<div className="card-body">
							<h2 className="card-title">Skills</h2>
							<div className="flex flex-row flex-wrap gap-2">
								{sortedSkills.map(({ icon, name }, index) => (
									<div
										key={index}
										className="badge badge-md lg:badge-lg badge-neutral badge-outline flex items-center gap-1">
										<Icon
											icon={icon}
											width="20"
											height="20"
										/>
										<div className="text-sm">{name}</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default AboutPage;
