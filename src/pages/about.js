import * as React from 'react';
import Layout from '../components/layout';
import Trustbar from '../components/trustbar';

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
				</div>
				<div className="hero-content flex flex-col items-stretch mt-8">
					<p className="text-sky-500 mb-2 font-medium">I work with a range of tools and technologies, including:</p>
				</div>
			</div>
			<Trustbar skills={skills} />
		</Layout>
	);
};

export default AboutPage;
