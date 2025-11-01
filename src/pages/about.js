import * as React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
	return (
		<Layout
			title="About"
			description="Portfolio of Marcus Stewart, Full Stack Developer.">
			<div className="flex flex-col items-center text-center">
				<h1 className="leading-snug text-5xl sm:text-6xl font-semibold bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent mb-8">
					About
				</h1>
				<div class="hero-content">
					<div class="max-w-lg">
						<p class="text-justify indent-8">
							Hello! I'm Marcus Stewart, I build clean, performant solutions that address real business challenges. Over my
							career, I’ve learned that simplicity often leads to the most effective results. I specialize in creating
							user-centered, performance-driven web applications using modern frameworks like Laravel, Vue, and React — always
							with a focus on clean, maintainable code. My curiosity and drive for growth push me to continually expand my
							expertise in areas such as API development, testing, and scalability.
						</p>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default AboutPage;
