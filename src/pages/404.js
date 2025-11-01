import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { navigate } from 'gatsby';

const NotFoundPage = () => {
	return (
		<section>
			<div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
				<div className="flex flex-col items-center max-w-sm mx-auto text-center">
					<p className="p-3 text-sm font-medium rounded-full btn no-animation cursor-default hover:bg-base-200">
						<StaticImage
							src="../images/information.png"
							alt="test"
							placeholder="blurred"
							fit="contain"
							height={20}
							width={20}
						/>
					</p>
					<h1 className="mt-3 text-2xl font-semibold md:text-3xl">Page not found</h1>
					<p className="mt-4">The page you are looking for doesn't exist. Here are some helpful links:</p>
					<div className="flex items-center justify-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
						<button
							onClick={() => navigate(-1)}
							className="btn btn-ghost transition ease-in-out duration-500">
							<StaticImage
								src="../images/arrow-left.png"
								className="w-5 h-5"
								alt="test"
								placeholder="blurred"
								fit="contain"
								height={20}
								width={20}
							/>
							<span>Go back</span>
						</button>
						<a
							href="/"
							className="btn transition ease-in-out duration-500">
							Take me home
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
