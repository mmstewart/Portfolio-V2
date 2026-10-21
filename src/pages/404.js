import * as React from 'react'
import { Link } from 'gatsby'
import Seo from '../components/seo'

const NotFoundPage = () => (
	<div className='flex flex-col items-center justify-center min-h-screen px-4 text-center'>
		<p className='text-base font-semibold'>404</p>
		<h1 className='text-5xl font-semibold leading-snug tracking-tighter text-transparent text-balance sm:text-6xl bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text'>
			Page not found
		</h1>
		<p className='mt-2 text-lg font-medium text-pretty sm:text-2xl'>
			Sorry, we couldn’t find the page you’re looking for.
		</p>
		<Link
			to='/'
			className='mt-10 btn btn-sm btn-primary'>
			Take Me Home
		</Link>
	</div>
)

export default NotFoundPage

export const Head = () => (
	<Seo title='Page not found'>
		<meta
			name='robots'
			content='noindex'
		/>
	</Seo>
)
