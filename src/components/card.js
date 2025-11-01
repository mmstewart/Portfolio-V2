import * as React from 'react';

export default function Card({ src, alt, title, description, badges = [] }) {
	return (
		<div class="card bg-base-100 w-96 border border-base-300">
			<figure>
				<img
					src={src}
					alt={alt}
				/>
			</figure>
			<div class="card-body">
				<h2 class="card-title">{title}</h2>
				{badges.length > 0 && (
					<div className="card-actions justify-start flex flex-wrap gap-2">
						{badges.map((badge, i) => (
							<div
								key={i}
								className="badge badge-outline badge-primary">
								{badge}
							</div>
						))}
					</div>
				)}
				<p className="text-justify">{description}</p>
				{/* <div class="card-actions justify-end">
					<div class="badge badge-outline">Fashion</div>
					<div class="badge badge-outline">Products</div>
				</div> */}
			</div>
		</div>
	);
}
