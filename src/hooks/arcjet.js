import { useEffect } from 'react';

export default function useArcjet() {
	useEffect(() => {
		fetch('/.netlify/functions/index', {
			method: 'GET',
		})
			.then((res) => res.json())
			.then((data) => console.log('ArcJet response:', data))
			.catch((err) => console.error(err));
	}, []);
}
