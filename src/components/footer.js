import * as React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';

const icons = [
	{
		Icon: FaGithub,
		url: 'https://github.com/mmstewart',
		alt: 'Github Logo',
		tooltipText: 'GitHub',
	},
	{
		Icon: FaLinkedin,
		url: 'https://linkedin.com/in/marcusmstewart',
		alt: 'Linkedin Logo',
		tooltipText: 'Linkedin',
	},
	{
		Icon: TfiEmail,
		url: 'mailto:mss.stewart1@gmail.com',
		alt: 'Email Logo',
		tooltipText: 'Email',
	},
];

export default function Footer() {
	return (
		<footer className="footer sm:footer-horizontal bg-base-200 text-base-content items-center p-4">
			<p>Made with ❤️ by Marcus Stewart</p>
			<nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
				{icons.map(({ Icon, url, tooltipText, alt }) => (
					<a
						key={alt}
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						className="tooltip"
						data-tip={tooltipText}>
						<Icon
							className="text-2xl hover:text-gray-700 transition duration-200 ease-in-out"
							aria-label={alt}
						/>
					</a>
				))}
			</nav>
		</footer>
	);
}
