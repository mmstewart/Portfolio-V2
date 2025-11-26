import * as React from 'react';
import Card from '../components/card';
import Layout from '../components/layout';

const cards = [
	{
		title: 'Portfolio 2.0',
		alt: 'Portfolio 2.0 Image',
		src: '/images/portfolio.png',
		description:
			'A rebuilt and modernized portfolio showcasing my latest projects, skills, and approach to building clean, performant web applications.',
		badges: ['Gatsby', 'TailwindCSS', 'DaisyUI'],
		buttons: [
			{ label: 'Live Demo', href: 'https://marcusstewart.me', className: 'btn btn-sm btn-primary' },
			{ label: 'View Repo', href: 'https://github.com/mmstewart/Portfolio-V2', className: 'btn btn-sm btn-outline btn-primary' },
		],
	},
	{
		title: 'Node-RED Temperature Monitoring',
		alt: 'Node-RED Temperature Monitoring Flow Image',
		src: '/images/nodered.png',
		description:
			'Created a server laboratory temperature-monitoring application to power off the servers once the temperature of the laboratory passes the temperature limit.',
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
		alt: 'Motivational Quotes Image',
		src: '/images/motivationalquotes.png',
		description:
			'A website that generates motivational quotes from a local database and powerful images from Unsplash to help motivate people. Inspired by the popular chrome extension, Momentum.',
		badges: ['React', 'Unsplash API', 'SCSS'],
		buttons: [
			{ label: 'Live Demo', href: 'https://reason-quotes.netlify.app/', className: 'btn btn-sm btn-primary' },
			{
				label: 'View Repo',
				href: 'https://github.com/mmstewart/Motivational-Quotes',
				className: 'btn btn-sm btn-outline btn-primary',
			},
		],
	},
];

const ProjectsPage = () => {
	return (
		<Layout
			title="Projects"
			description="Portfolio of Marcus Stewart, Full Stack Developer.">
			<div className="flex flex-col items-center text-center">
				<h1 className="leading-snug text-5xl sm:text-6xl font-semibold bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent mb-8">
					Projects
				</h1>
				<div className="hero-content">
					<ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
						{cards.map((card, index) => (
							<Card
								key={index}
								src={card.src}
								alt={card.alt}
								title={card.title}
								description={card.description}
								badges={card.badges}
								buttons={card.buttons}
							/>
						))}
					</ul>
				</div>
			</div>
		</Layout>
	);
};

export default ProjectsPage;
