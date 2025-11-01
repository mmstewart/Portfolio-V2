import * as React from 'react';
import { Link } from 'gatsby';
import { RiMenu2Line } from 'react-icons/ri';

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
		title: 'Skills',
		url: '/skills',
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
						<RiMenu2Line className="h-5 w-5" />
					</div>
					<ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
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
