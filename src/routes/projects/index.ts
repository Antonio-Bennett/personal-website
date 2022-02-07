import type { EndpointOutput } from '@sveltejs/kit';

export const get = async (): Promise<EndpointOutput> => {
    const projects = [
        {
            id: 1,
            title: 'Portfolio',
            category: 'Web Application',
            img: 'https://picsum.photos/1080?random=1',
        },
        {
            id: 2,
            title: 'Static Site Generator',
            category: 'Cli Application',
            img: 'https://picsum.photos/1080?random=2',
        },
        {
            id: 3,
            title: 'Tic Tac Toe',
            category: 'Cli Application',
            img: 'https://picsum.photos/1080?random=3',
        },
    ];

    return {
        body: {
            projects,
        },
    };
};
