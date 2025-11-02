import * as React from 'react';
import Layout from '../components/layout';
import { Icon } from '@iconify/react';

const icons = [
	{
		icon: 'mdi:github',
		url: 'https://github.com/mmstewart',
		name: 'GitHub',
	},
	{
		icon: 'mdi:linkedin',
		url: 'https://linkedin.com/in/marcusmstewart',
		name: 'Linkedin',
	},
	{
		icon: 'mdi:email',
		url: 'mailto:mss.stewart1@gmail.com',
		name: 'Email',
	},
];

const ContactPage = () => {
	return (
		<Layout
			title="Contact"
			description="Portfolio of Marcus Stewart, Full Stack Developer.">
			<div className="mb-16 flex flex-col items-center justify-center text-center grow">
				<h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-6xl bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
					Contact
				</h2>
				<p className="mt-2 text-lg lg:text-2xl font-semibold">Let's get in touch!</p>
				<div className="hero-content flex-col mt-8">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-x-20 gap-y-10">
						{icons.map(({ icon, url, name }, index) => (
							<a
								key={index}
								href={url}
								rel="noopener noreferrer">
								<div className="flex flex-row gap-2">
									<Icon
										icon={icon}
										width="26"
										height="26"
									/>
									<div className="text-base lg:text-lg">{name}</div>
								</div>
							</a>
						))}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default ContactPage;
