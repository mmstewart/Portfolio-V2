import * as React from 'react';
import { Icon } from '@iconify/react';

const icons = [
	{
		icon: 'mdi:github',
		url: 'https://github.com/mmstewart',
		tooltipText: 'GitHub',
	},
	{
		icon: 'mdi:linkedin',
		url: 'https://linkedin.com/in/marcusmstewart',
		tooltipText: 'Linkedin',
	},
	{
		icon: 'mdi:email',
		url: 'mailto:mss.stewart1@gmail.com',
		tooltipText: 'Email',
	},
];

export default function Footer() {
	return (
		<footer className="footer sm:footer-horizontal bg-base-200 text-base-content items-center p-4">
			<p>Made with ❤️ by Marcus Stewart</p>
			<nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
				{icons.map(({ icon, url, tooltipText }, index) => (
					<a
						key={index}
						href={url}
						rel="noopener noreferrer"
						className="tooltip"
						data-tip={tooltipText}>
						<Icon
							icon={icon}
							width="26"
							height="26"
						/>
					</a>
				))}
			</nav>
		</footer>
	);
}
