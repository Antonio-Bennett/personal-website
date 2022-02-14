import type { EndpointOutput } from '@sveltejs/kit';
import projects from '../../../static/projects.json';

export const get = async (): Promise<EndpointOutput> => {
    return {
        body: {
            projects,
        },
    };
};
