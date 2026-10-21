import * as React from 'react'

export default function Card({ image, title, description, badges = [], buttons = [] }) {
	return (
		<li className='w-full h-full border card border-base-300 bg-base-100'>
			<figure className='aspect-video overflow-hidden [&_.gatsby-image-wrapper]:h-full [&_.gatsby-image-wrapper]:w-full'>
				{image}
			</figure>
			<div className='gap-4 text-left card-body'>
				<h2 className='card-title'>{title}</h2>
				{badges.length > 0 && (
					<ul className='flex flex-wrap gap-2'>
						{badges.map(badge => (
							<li
								key={badge}
								className='badge badge-outline badge-primary'>
								{badge}
							</li>
						))}
					</ul>
				)}
				<p className='leading-relaxed text-pretty'>{description}</p>
				{buttons.length > 0 && (
					<div className='justify-end pt-2 mt-auto card-actions'>
						{buttons.map(btn => (
							<a
								key={btn.label}
								href={btn.href}
								target='_blank'
								rel='noopener noreferrer'
								className={`btn ${btn.className || 'btn-primary'}`}>
								{btn.label}
							</a>
						))}
					</div>
				)}
			</div>
		</li>
	)
}
