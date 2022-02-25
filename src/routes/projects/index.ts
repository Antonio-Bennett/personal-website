import type { RequestHandler } from '@sveltejs/kit';
import projects from '$lib/utils/projects.json';

export const get: RequestHandler = async () => {
    return {
        body: {
            projects,
        },
    };
};
