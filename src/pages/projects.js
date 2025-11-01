import * as React from 'react';
import Card from '../components/card';
import Layout from '../components/layout';

const cards = [
	{
		title: 'Portfolio 2.0',
		alt: 'Portfolio 2.0 Image',
		src: '/static/images/portfolio.png',
		description:
			'A rebuilt and modernized portfolio showcasing my latest projects, skills, and approach to building clean, performant web applications.',
		badges: ['Gatsby', 'TailwindCSS', 'DaisyUI'],
	},
	{
		title: 'Node-RED Temperature Monitoring',
		alt: 'Node-RED Temperature Monitoring Flow Image',
		src: '/static/images/nodered.png',
		description:
			'Created a server laboratory temperature-monitoring application to power off the servers once the temperature of the laboratory passes the temperature limit.',
		badges: ['Bash', 'Node-RED'],
	},
	{
		title: 'Motivational Quotes',
		alt: 'Motivational Quotes Image',
		src: '/static/images/motivationalquotes.png',
		description:
			'A website that generates motivational quotes from a local database and powerful images from Unsplash to help motivate people. Inspired by the popular chrome extension, Momentum.',
		badges: ['React', 'Unsplash API', 'SCSS'],
	},
];

const ProjectsPage = () => {
	return (
		<Layout
			title="Projects"
			description="Portfolio of Marcus Stewart, Full Stack Developer.">
			<main className="flex flex-col items-center justify-center grow text-center">
				<div className="max-w-7xl">
					<h2 className="text-4xl leading-snug sm:text-6xl text-left font-semibold bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
						Projects
					</h2>
					<ul class="mt-4 grid grid-cols-4 sm:grid-cols-3 gap-x-4">
						{cards.map((card) => (
							<Card
								src={card.src}
								alt={card.alt}
								title={card.title}
								description={card.description}
								badges={card.badges}
							/>
						))}
					</ul>
				</div>
			</main>
		</Layout>
	);
};

export default ProjectsPage;
