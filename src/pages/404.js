import * as React from 'react';
import { Link } from 'gatsby';

const NotFoundPage = () => {
	return (
		<div className="flex flex-col justify-center items-center min-h-screen text-center">
			<p className="text-base font-semibold">404</p>
			<h1 className="leading-snug tracking-tighter text-balance text-5xl sm:text-6xl font-semibold bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
				Page not found
			</h1>
			<p className="mt-2 text-lg font-medium text-pretty sm:text-2xl">Sorry, we couldn’t find the page you’re looking for.</p>
			<Link
				to="/"
				className="mt-10 btn btn-sm btn-primary">
				Take Me Home
			</Link>
		</div>
	);
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
