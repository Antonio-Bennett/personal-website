<script context="module" lang="ts">
    import type { LoadOutput, LoadInput } from '@sveltejs/kit';

    export const load = async ({ fetch }: LoadInput): Promise<LoadOutput> => {
        const res = await fetch('/projects', {
            headers: {
                Accept: 'application/json',
            },
        });

        const { projects } = await res.json();

        if (res.ok) {
            return {
                props: {
                    projects,
                },
            };
        }
    };
</script>

<script lang="ts">
    // import GraphicDark from '$lib/components/graphic_dark.svelte';
    import GraphicLight from '$lib/components/graphic_light.svelte';
    import ProjectList from '$lib/components/project_list.svelte';

    export let projects: {
        id: number;
        title: string;
        category: string;
        img: string;
    }[];
</script>

<div class="grid md:grid-cols-3">
    <section
        class="my-3 flex flex-col items-center justify-center gap-2 md:items-start">
        <h1 class="mt-6 font-sans text-3xl font-semibold text-mainDark">
            HEY! I'M ANTONIO
        </h1>
        <h2
            class="font-sans text-lg font-normal text-gray-400 md:text-2xl md:font-medium">
            A Software Developer & Tech Enthusiast
        </h2>
        <a
            href="/favicon.png"
            download
            class="shadow[#eef2ff] my-10 flex items-center gap-2 rounded-lg border border-slate-300 bg-[#eef2ff] p-4 font-semibold text-gray-600 shadow-lg">
            <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                        fill-rule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                </svg>
            </span>
            <span>Download Resume</span>
        </a>
    </section>
    <span class="col-span-2">
        <GraphicLight />
    </span>
    <section class="my-8 flex flex-col items-center md:col-span-3">
        <h2 class="mb-10 font-sans text-3xl font-semibold text-mainDark">
            Projects
        </h2>
        <div
            class="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <ProjectList {projects} />
        </div>
        <a
            href="/projects"
            class="mt-14 mb-16 rounded-lg bg-[#6366f1] py-3 px-6 font-sans text-xl font-semibold text-white shadow-md shadow-slate-300"
            ><button>More Projects</button></a>
    </section>
</div>
