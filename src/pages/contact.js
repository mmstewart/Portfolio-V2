import * as React from 'react';
import Layout from '../components/layout';
import { Icon } from '@iconify/react';
import { useState } from 'react';

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
	const [formData, setFormData] = useState({ name: '', email: '', message: '' });
	const [errors, setErrors] = useState({});

	const validate = () => {
		const newErrors = {};

		if (!formData.name.trim()) newErrors.name = 'Name is required';

		if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Invalid email address';

		if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';

		return newErrors;
	};

	const handleSubmit = (e) => {
		const newErrors = validate();

		if (Object.keys(newErrors).length > 0) {
			e.preventDefault();

			setErrors(newErrors);
		}
	};

	return (
		<Layout
			title="Contact"
			description="Portfolio of Marcus Stewart, Full Stack Developer.">
			<h1 className="leading-snug text-5xl sm:text-6xl font-semibold bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent mb-8">
				Contact me!
			</h1>
			<div className="hero-content flex-col">
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
				<form
					action="https://getform.io/f/bwnypgga"
					method="POST"
					onSubmit={handleSubmit}
					className="fieldset border-base-300 rounded-box w-xs lg:w-lg border pb-4 px-4">
					<input
						type="hidden"
						name="_gotcha"
						className="hidden"></input>
					<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-6">
						<div className="col-span-full">
							<label
								htmlFor="name"
								className="fieldset-legend">
								Name
							</label>
							<input
								id="name"
								type="text"
								name="name"
								value={formData.name}
								onChange={(e) => setFormData({ ...formData, name: e.target.value })}
								className="input w-full"
							/>
							{errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
							<label
								htmlFor="email"
								className="fieldset-legend mt-2">
								Email
							</label>
							<input
								id="email"
								type="email"
								name="email"
								value={formData.email}
								onChange={(e) => setFormData({ ...formData, email: e.target.value })}
								className="input w-full"
							/>
							{errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
							<label
								htmlFor="message"
								className="fieldset-legend mt-2">
								Message
							</label>
							<textarea
								id="message"
								name="message"
								rows="4"
								value={formData.message}
								onChange={(e) => setFormData({ ...formData, message: e.target.value })}
								className="textarea w-full"
							/>
							{errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
						</div>
					</div>
					<div className="mt-4">
						<button
							type="submit"
							className="btn btn-sm btn-primary">
							Let's talk
						</button>
					</div>
				</form>
			</div>
		</Layout>
	);
};

export default ContactPage;
