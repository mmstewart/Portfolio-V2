import * as React from 'react';

export default function Card({ src, alt, title, description, badges = [], buttons = [] }) {
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	return (
		<div className="card bg-base-100 w-96 border border-base-300">
			<figure>
				{loading ? (
					<div className="h-[199px] w-[382px] skeleton rounded-none" />
				) : (
					<img
						src={src}
						alt={alt}
						onLoad={() => setLoading(false)}
					/>
				)}
			</figure>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				{badges.length > 0 && (
					<div className="card-actions justify-start flex flex-wrap gap-2">
						{badges.map((badge, index) => (
							<div
								key={index}
								className="badge badge-outline badge-primary">
								{badge}
							</div>
						))}
					</div>
				)}
				<p className="text-justify">{description}</p>
				<div className="card-actions justify-end">
					{buttons.length > 0 && (
						<div className="flex gap-x-2">
							{buttons.map((btn, index) => (
								<a
									key={index}
									href={btn.href}
									className={`btn ${btn.className || 'btn-primary'}`}>
									{btn.label}
								</a>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
