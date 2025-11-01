import * as React from 'react';
import Layout from '../components/layout';

const IndexPage = () => {
	return (
		<Layout
			title="Home"
			description="Portfolio of Marcus Stewart, Full Stack Developer.">
			<main className="flex flex-col items-center justify-center grow text-center">
				<div className="max-w-2xl">
					<h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-6xl">Marcus Stewart</h2>
					<p className="mt-2 text-2xl font-semibold bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
						Full Stack Developer
					</p>
				</div>
			</main>
		</Layout>
	);
};

export default IndexPage;
