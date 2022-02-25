import type { RequestHandler } from '@sveltejs/kit';
import 'dotenv/config';

export const get: RequestHandler = async () => {
    const res = await fetch('https://dev.to/api/articles/me', {
        headers: {
            api_key: process.env.DEV_API_KEY,
        },
    });

    const articles = await res.json();

    if (res.ok) {
        return {
            body: {
                articles,
            },
        };
    }
};
