import * as React from 'react';
import { Link } from 'gatsby';
import { Icon } from '@iconify/react';

const links = [
	{
		title: 'Home',
		url: '/',
	},
	{
		title: 'About',
		url: '/about',
	},
	{
		title: 'Projects',
		url: '/projects',
	},
	{
		title: 'Contact',
		url: '/contact',
	},
];

export default function Navbar() {
	return (
		<div className="navbar bg-base-100 border-b border-base-300">
			<div className="navbar-start">
				<div className="dropdown">
					<div
						tabIndex="0"
						role="button"
						className="btn btn-ghost lg:hidden">
						<Icon
							icon="material-symbols:menu-rounded"
							width="20"
							height="20"
						/>
					</div>
					<ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-5 w-52 p-2 border border-base-300">
						{links.map((list, index) => (
							<li key={index}>
								<Link
									to={list.url}
									className="link link-hover">
									{list.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<a
					href="/"
					className="btn btn-ghost text-xl">
					Marcus Stewart
				</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					{links.map((list, index) => (
						<li key={index}>
							<Link
								to={list.url}
								activeClassName="underline">
								{list.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div className="navbar-end">
				<a
					href="/static/resume.pdf"
					rel="noopener noreferrer"
					className="btn btn-ghost">
					Resume
				</a>
			</div>
		</div>
	);
}
