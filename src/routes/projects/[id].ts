import type { RequestHandler } from '@sveltejs/kit';
import projects from '$lib/utils/projects.json';

export const get: RequestHandler = async ({ params }) => {
    const [project] = projects.filter((project) => project.id === +params.id);

    return {
        body: {
            project,
        },
    };
};
