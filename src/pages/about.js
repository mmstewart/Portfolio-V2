import * as React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
	return (
		<Layout
			title="About"
			description="Portfolio of Marcus Stewart, Full Stack Developer.">
			<main className="flex flex-col items-center justify-center grow text-center">
				<div className="max-w-2xl">
					<h2 className="text-4xl sm:text-6xl text-left font-semibold bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
						Hello, I'm Marcus!
					</h2>
					<p className="text-left mt-2 text-2xl font-semibold tracking-tight text-pretty sm:text-4xl">
						<span className="block">I'm a full stack developer</span>
						<span className="block">based out of Minneapolis, Minnesota.</span>
					</p>
					<p className="indent-8 mt-6 text-lg text-justify">
						I build clean, performant solutions that address real business challenges. Over my career, I’ve learned that
						simplicity often leads to the most effective results. I specialize in creating user-centered, performance-driven web
						applications using modern frameworks like Laravel, Vue, and React — always with a focus on clean, maintainable code.
						My curiosity and drive for growth push me to continually expand my expertise in areas such as API development,
						testing, and scalability.
					</p>
				</div>
			</main>
		</Layout>
	);
};

export default AboutPage;
