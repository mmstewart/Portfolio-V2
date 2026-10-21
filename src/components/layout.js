import * as React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import useArcjet from '../hooks/arcjet'

export default function Layout({ children, title, subtitle, centered = false }) {
	useArcjet()

	return (
		<div className='flex flex-col min-h-screen overflow-hidden'>
			<Navbar />

			<main className='flex flex-col pt-32 pb-16 grow motion-preset-fade motion-duration-1500'>
				<section
					className={`mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-4 ${
						centered ? 'grow justify-center' : ''
					}`}>
					<header className='flex flex-col items-center gap-2 text-center'>
						<h1 className='text-5xl font-semibold leading-snug tracking-tight text-transparent sm:text-6xl bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text'>
							{title}
						</h1>
						{subtitle && <p className='text-lg font-semibold lg:text-2xl'>{subtitle}</p>}
					</header>
					{children}
				</section>
			</main>

			<Footer />
		</div>
	)
}
