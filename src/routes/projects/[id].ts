import type { EndpointOutput, RequestEvent } from '@sveltejs/kit';
import projects from '$lib/utils/projects.json';

export const get = async ({
    params,
}: RequestEvent): Promise<EndpointOutput> => {
    const [project] = projects.filter((project) => project.id === +params.id);

    return {
        body: {
            project,
        },
    };
};
