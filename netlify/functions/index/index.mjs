// /netlify/functions/index.mjs

import arcjet, { detectBot, shield, tokenBucket } from '@arcjet/node';
import { isSpoofedBot } from '@arcjet/inspect';

// Initialize ArcJet with your site key
const aj = arcjet({
	key: process.env.ARCJET_KEY, // must match the env var on Netlify
	rules: [
		shield({ mode: 'LIVE' }), // protect against common attacks
		detectBot({
			mode: 'LIVE',
			allow: ['CATEGORY:SEARCH_ENGINE', 'CATEGORY:PREVIEW'],
		}),
		tokenBucket({
			mode: 'LIVE',
			refillRate: 5,
			interval: 10,
			capacity: 60,
		}),
	],
});

// Export a Classic Netlify handler
export async function handler(event, context) {
	const req = {
		headers: event.headers,
		method: event.httpMethod,
		url: event.rawUrl,
	};

	const decision = await aj.protect(req, { requested: 5 });
	console.log('ArcJet decision:', decision);

	// Denied requests
	if (decision.isDenied()) {
		if (decision.reason.isRateLimit()) {
			return {
				statusCode: 429,
				body: JSON.stringify({ error: 'Too many requests' }),
			};
		} else if (decision.reason.isBot()) {
			return {
				statusCode: 403,
				body: JSON.stringify({ error: 'No bots allowed' }),
			};
		}
		return {
			statusCode: 403,
			body: JSON.stringify({ error: 'Forbidden' }),
		};
	}

	// Hosting IPs or spoofed bots
	if (decision.ip.isHosting() || decision.results.some(isSpoofedBot)) {
		return {
			statusCode: 403,
			body: JSON.stringify({ error: 'Forbidden' }),
		};
	}

	// All good
	return {
		statusCode: 200,
		body: JSON.stringify({ message: 'Rate limit check passed' }),
	};
}
