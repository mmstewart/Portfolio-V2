import * as React from 'react';
import { Icon } from '@iconify/react';

export default function Trustbar({ skills }) {
	return (
		<div className="max-w-5xl px-4 w-full mx-auto">
			<style>{`
                .marquee-track {
                    animation: marqueeScroll 25s linear infinite;
                }
                @keyframes marqueeScroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>

			<div className="w-full overflow-hidden relative select-none">
				<div className="absolute -left-3 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r from-white to-transparent" />
				<div className="marquee-track flex min-w-[200%]">
					<div className="flex">
						{[...skills, ...skills].map((skill, i) => (
							<div
								key={i}
								className="badge badge-neutral badge-outline flex items-center gap-2 mx-8 whitespace-nowrap h-auto! py-2! px-4!">
								<Icon
									icon={skill.icon}
									className="size-5"
								/>
								<span className="text-sm">{skill.name}</span>
							</div>
						))}
					</div>
				</div>
				<div className="absolute -right-5 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-linear-to-l from-white to-transparent" />
			</div>
		</div>
	);
}
