import * as React from 'react'
import { Icon } from '@iconify/react'

export default function Trustbar({ skills }) {
	return (
		<div className='relative w-full max-w-5xl mx-auto overflow-hidden select-none'>
			<style>{`
				.marquee-inner {
					animation: marqueeScroll 45s linear infinite;
				}
				@keyframes marqueeScroll {
					0% { transform: translateX(0%); }
					100% { transform: translateX(-50%); }
				}
			`}</style>

			<div className='absolute top-0 left-0 z-10 w-20 h-full pointer-events-none bg-linear-to-r from-white to-transparent' />

			<div className='flex marquee-inner will-change-transform w-max'>
				<div className='flex'>
					{[...skills, ...skills].map((skill, i) => (
						<div
							key={i}
							className='badge badge-outline border-base-300 flex items-center gap-2 mx-6 whitespace-nowrap h-auto! py-2! px-4!'>
							<Icon
								icon={skill.icon}
								className='size-5'
							/>
							<span className='text-sm'>{skill.name}</span>
						</div>
					))}
				</div>
			</div>

			<div className='absolute top-0 right-0 z-10 w-20 h-full pointer-events-none md:w-40 bg-linear-to-l from-white to-transparent' />
		</div>
	)
}
